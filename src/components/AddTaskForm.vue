<script setup lang="ts">
import { ref } from "vue";
import { useTaskStore } from "../store/taskStore";

const taskStore = useTaskStore();
const newTask = ref("");

// Add new task
async function addTask() {
  if (!newTask.value.trim()) return; // prevent empty tasks
  await taskStore.addTask(newTask.value.trim());
  newTask.value = ""; // clear input
}
</script>

<template>
  <form @submit.prevent="addTask" class="flex gap-2 mb-4">
    <input
      v-model="newTask"
      type="text"
      placeholder="Enter a new task"
      class="border p-2 w-full mb-2 placeholder-gray-400 dark:placeholder-gray-500"
    />
    <button
      type="submit"
      :disabled="!newTask.trim()"
      class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200 h-full"
    >
      Add
    </button>
  </form>
</template>
