<script setup lang="ts">
import { useTaskStore } from "../store/taskStore";

const taskStore = useTaskStore();
taskStore.fetchTasks();

function toggle(task: any) {
  taskStore.toggleTask(task.id, !task.completed);
}
function remove(taskId: string) {
  taskStore.deleteTask(taskId);
}
</script>

<template>
  <div>
    <ul>
      <li v-for="task in taskStore.tasks" :key="task.id" class="flex justify-between">
        <span :class="{ 'line-through': task.completed }">{{ task.title }}</span>
        <div>
          <button @click="toggle(task)">
            {{ task.completed ? "Undo" : "Complete" }}
          </button>
          <button @click="remove(task.id)">❌</button>
        </div>
      </li>
    </ul>
  </div>
</template>