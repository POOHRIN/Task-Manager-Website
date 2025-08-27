<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { auth } from "./firebase/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";

const darkMode = ref(false);
const isLoggedIn = ref(false);
const route = useRoute();
const router = useRouter();

onMounted(() => {
  const saved = localStorage.getItem("darkMode");
  darkMode.value = saved === "true";
  updateHtmlClass();

  onAuthStateChanged(auth, (user) => {
    isLoggedIn.value = !!user;
  });
});

watch(darkMode, () => {
  updateHtmlClass();
  localStorage.setItem("darkMode", darkMode.value.toString());
});

function updateHtmlClass() {
  if (darkMode.value) document.documentElement.classList.add("dark");
  else document.documentElement.classList.remove("dark");
}

function toggleDark() {
  darkMode.value = !darkMode.value;
}

async function logout() {
  await signOut(auth);
  router.push("/login");
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

      <div class="flex items-center gap-2">
        <!-- Sun / Moon toggle -->
        <button
          @click="toggleDark"
          class="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300 flex items-center justify-center"
          aria-label="Toggle dark mode"
        >
          <svg
            v-if="!darkMode"
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 3a1 1 0 011 1v1a1 1 0 11-2 0V4a1 1 0 011-1zM4.22 5.22a1 1 0 011.42 0l.7.7a1 1 0 11-1.42 1.42l-.7-.7a1 1 0 010-1.42zM3 10a1 1 0 011-1h1a1 1 0 110 2H4a1 1 0 01-1-1zm7 7a1 1 0 011-1v-1a1 1 0 10-2 0v1a1 1 0 011 1zm6.78-2.78a1 1 0 010 1.42l-.7.7a1 1 0 01-1.42-1.42l.7-.7a1 1 0 011.42 0zM16 10a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zm-2.78-4.78a1 1 0 00-1.42-1.42l-.7.7a1 1 0 001.42 1.42l.7-.7zM6.22 14.78a1 1 0 00-1.42 0l-.7.7a1 1 0 101.42 1.42l.7-.7a1 1 0 000-1.42zM10 6a4 4 0 100 8 4 4 0 000-8z"
            />
          </svg>

          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-gray-200"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M17.293 13.293a8 8 0 11-10.586-10.586 8 8 0 0010.586 10.586z"
            />
          </svg>
        </button>

        <!-- Logout button: only show if logged in and on dashboard -->
        <button
          v-if="isLoggedIn && route.name === 'dashboard'"
          @click="logout"
          class="h-10 px-3 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-300"
        >
          Logout
        </button>
      </div>
    </header>
    <main class="p-6">
      <router-view />
    </main>
  </div>
</template>
