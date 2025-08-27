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
      class="flex-1 border p-2 rounded"
    />
    <button 
      type="submit"
      class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      Add
    </button>
  </form>
</template>
