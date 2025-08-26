<script setup lang="ts">

</script>

<template>
  <div class="min-h-screen bg-gray-50 text-gray-800">
    <!-- Simple navigation bar -->
    <header class="bg-white shadow p-4 flex justify-between items-center">
      <h1 class="text-xl font-bold text-blue-600">Task Manager</h1>
    </header>

    <!-- This is where views (Login, Register, Dashboard) render -->
    <main class="p-6">
      <router-view />
    </main>
  </div>   
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
