<script setup lang="ts">
import { useTaskStore } from "../store/taskStore";

// Props: each task has id, title, completed
interface Task {
  id: string;
  title: string;
  completed: boolean;
}

const props = defineProps<{ task: Task }>();

const taskStore = useTaskStore();

function toggleComplete() {
  taskStore.toggleTask(props.task.id, !props.task.completed);
}

function removeTask() {
  taskStore.deleteTask(props.task.id);
}
</script>

<template>
  <li
    class="flex justify-between items-center bg-white dark:bg-gray-800 shadow rounded p-2 mb-2 transition-colors duration-300"
  >
    <div class="flex items-center">
      <input
        type="checkbox"
        :checked="props.task.completed"
        @change="toggleComplete"
        class="mr-2"
      />
      <span
        :class="{
          'line-through text-gray-400': props.task.completed,
          'text-gray-900 dark:text-gray-100': !props.task.completed,
        }"
      >
        {{ props.task.title }}
      </span>
    </div>
    <button
      @click="removeTask"
      class="text-red-400 hover:text-red-500 dark:hover:text-red-300 transition duration-200 rounded inline-flex p-0 shadow-none hover:drop-shadow-[0_0_6px_rgba(239,68,68,0.7)]"
      title="Delete task"
    >
      ❌
    </button>
  </li>
</template>
