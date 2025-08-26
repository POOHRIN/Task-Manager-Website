import { defineStore } from "pinia";
import { db, auth } from "../firebase/firebase";
import { 
  collection, addDoc, getDocs, updateDoc, deleteDoc, doc, query, where 
} from "firebase/firestore";

interface Task {
  id?: string;
  title: string;
  completed: boolean;
}

export const useTaskStore = defineStore("task", {
  state: () => ({
    tasks: [] as Task[],
    loading: false
  }),
  actions: {
    async fetchTasks() {
      if (!auth.currentUser) return;
      this.loading = true;
      const q = query(collection(db, "users", auth.currentUser.uid, "tasks"));
      const snapshot = await getDocs(q);
      this.tasks = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Task[];
      this.loading = false;
    },
    async addTask(title: string) {
      if (!auth.currentUser) return;
      await addDoc(collection(db, "users", auth.currentUser.uid, "tasks"), {
        title,
        completed: false
      });
      await this.fetchTasks();
    },
    async toggleTask(id: string, completed: boolean) {
      if (!auth.currentUser) return;
      const ref = doc(db, "users", auth.currentUser.uid, "tasks", id);
      await updateDoc(ref, { completed });
      await this.fetchTasks();
    },
    async deleteTask(id: string) {
      if (!auth.currentUser) return;
      const ref = doc(db, "users", auth.currentUser.uid, "tasks", id);
      await deleteDoc(ref);
      await this.fetchTasks();
    }
  }
});