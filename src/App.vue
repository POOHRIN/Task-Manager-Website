<script setup lang="ts">
import { ref, onMounted, watch } from "vue";

const darkMode = ref(false);

// Initialize dark mode from localStorage
onMounted(() => {
  const saved = localStorage.getItem("darkMode");
  darkMode.value = saved === "true";
  updateHtmlClass();
});

// Watch for changes to darkMode
watch(darkMode, () => {
  updateHtmlClass();
  localStorage.setItem("darkMode", darkMode.value.toString());
});

// Toggle the "dark" class on <html>
function updateHtmlClass() {
  if (darkMode.value) document.documentElement.classList.add("dark");
  else document.documentElement.classList.remove("dark");
}

// Function to toggle dark mode
function toggleDark() {
  darkMode.value = !darkMode.value;
}
</script>

<template>
  <div
    class="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300"
  >
    <header
      class="bg-white dark:bg-gray-800 shadow p-4 flex justify-between items-center"
    >
      <h1 class="text-xl font-bold text-blue-600 dark:text-blue-400">
        To Do List
      </h1>
      <button
        @click="toggleDark"
        class="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded transition-colors duration-300"
      >
        {{ darkMode ? "Light" : "Dark" }}
      </button>
    </header>

    <main class="p-6">
      <router-view />
    </main>
  </div>
</template>
