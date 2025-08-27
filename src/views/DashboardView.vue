<script setup lang="ts">
import { auth } from "../firebase/firebase";
import { signOut } from "firebase/auth";
import { useTaskStore } from "../store/taskStore";
import TaskList from "../components/TaskList.vue";
import AddTaskForm from "../components/AddTaskForm.vue";
import { useRouter } from "vue-router";

const taskStore = useTaskStore();
const router = useRouter();
</script>

<template>
  <div class="max-w-lg mx-auto mt-10">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-2xl font-bold">Your Tasks</h2>
    </div>

    <AddTaskForm />
    <TaskList />
  </div>
</template>