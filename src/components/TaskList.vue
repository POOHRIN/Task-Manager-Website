<script setup lang="ts">
import { useTaskStore } from "../store/taskStore";
import TaskItem from "./TaskItem.vue";

const taskStore = useTaskStore();
</script>

<template>
  <div class="transition-colors duration-300">
    <p v-if="taskStore.loading" class="text-gray-700 dark:text-gray-300 mb-2">Loading tasks...</p>
    
    <ul v-else>
      <TaskItem 
        v-for="task in taskStore.tasks" 
        :key="task.id" 
        :task="task" 
      />
      <p 
        v-if="!taskStore.tasks.length" 
        class="text-gray-600 dark:text-gray-400 mt-2"
      >
        No tasks yet.
      </p>
    </ul>
  </div>
</template>
