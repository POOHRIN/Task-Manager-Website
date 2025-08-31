import { defineStore } from "pinia";
import { auth, db } from "../firebase/firebase";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

interface TaskState {
  tasks: Task[];
  unsubscribe: null | (() => void);
  loading: boolean;
}

export const useTaskStore = defineStore("task", {
  state: (): TaskState => ({
    tasks: [],
    unsubscribe: null,
    loading: true,
  }),

  actions: {
    init() {
      this.loading = true;

      onAuthStateChanged(auth, (user) => {
        if (user) {
          const tasksRef = collection(db, "users", user.uid, "tasks");
          this.unsubscribe = onSnapshot(tasksRef, (snapshot) => {
            this.tasks = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...(doc.data() as Omit<Task, "id">),
            }));
            this.loading = false;
          });
        } else {
          this.tasks = [];
          this.loading = false;
          if (this.unsubscribe) {
            this.unsubscribe();
            this.unsubscribe = null;
          }
        }
      });
    },

    async addTask(title: string) {
      if (!auth.currentUser) return;
      await addDoc(collection(db, "users", auth.currentUser.uid, "tasks"), {
        title,
        completed: false,
      });
    },

    async toggleTask(id: string, completed: boolean) {
      if (!auth.currentUser) return;
      const ref = doc(db, "users", auth.currentUser.uid, "tasks", id);
      await updateDoc(ref, { completed });
    },

    async deleteTask(id: string) {
      if (!auth.currentUser) return;
      const ref = doc(db, "users", auth.currentUser.uid, "tasks", id);
      await deleteDoc(ref);
    },
  },
});
