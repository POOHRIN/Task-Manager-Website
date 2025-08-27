<script setup lang="ts">
import { ref } from "vue";
import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const errorMessage = ref("");
const router = useRouter();

// refs for focusing inputs
const emailInput = ref<HTMLInputElement | null>(null);
const passwordInput = ref<HTMLInputElement | null>(null);

// track password visibility
const showPassword = ref(false);

const firebaseErrors: Record<string, string> = {
  "auth/invalid-email": "Invalid email address.",
  "auth/user-disabled": "This account has been disabled.",
  "auth/missing-password": "Missing password.",
  "auth/invalid-credential": "Incorrect password.",
};

async function login() {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    router.push("/dashboard");
  } catch (error: any) {
    console.error("Firebase login error:", error);
    const code = error.code || error.message;
    errorMessage.value =
      firebaseErrors[code] || "An unexpected error occurred.";
  }
}

function handleEmailKeydown(e: KeyboardEvent) {
  if (e.key === "Enter" || e.key === "ArrowDown") {
    e.preventDefault();
    passwordInput.value?.focus();
  }
}

function handlePasswordKeydown(e: KeyboardEvent) {
  if (e.key === "ArrowUp") {
    e.preventDefault();
    emailInput.value?.focus();
  } else if (e.key === "Enter") {
    e.preventDefault();
    login();
  }
}

function togglePassword() {
  showPassword.value = !showPassword.value;
}
</script>

<template>
  <div
    class="max-w-sm mx-auto mt-20 min-h-screen transition-colors duration-300 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
  >
    <h2 class="text-xl font-bold mb-4">Login</h2>

    <!-- Email -->
    <input
      ref="emailInput"
      v-model="email"
      type="email"
      placeholder="Email"
      class="border p-2 w-full mb-2"
      @keydown="handleEmailKeydown"
    />

    <!-- Password -->
    <div class="relative w-full mb-2">
      <input
        ref="passwordInput"
        v-model="password"
        :type="showPassword.value ? 'text' : 'password'"
        placeholder="Password"
        class="border p-2 w-full pr-10 rounded"
        @keydown="handlePasswordKeydown"
      />
      <!-- Show/Hide -->
      <button
        type="button"
        @click="togglePassword"
        aria-label="Toggle password visibility"
        class="absolute inset-y-0 right-2 flex items-center text-gray-500 hover:text-gray-700 transition-all duration-200"
      >
        <span
          :class="[
            'w-5 h-5 inline-block',
            showPassword ? 'scale-125 opacity-100' : 'scale-100 opacity-60',
            'transition-all duration-300 ease-in-out',
          ]"
        >
          <svg
            v-if="!showPassword"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a10.05 10.05 0 011.658-3.197M6.1 6.1l11.8 11.8M9.88 9.88a3 3 0 104.243 4.243"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        </span>
      </button>
    </div>

    <!-- Login button -->
    <button
      @click="login"
      class="bg-blue-500 text-white px-4 py-2 rounded w-full"
    >
      Login
    </button>

    <p v-if="errorMessage" class="text-red-500 mt-2">{{ errorMessage }}</p>

    <p class="mt-4 text-sm">
      Don’t have an account?
      <router-link
        to="/register"
        class="text-blue-500 font-medium hover:underline transition-colors duration-200 dark:text-blue-400"
      >
        Register
      </router-link>
    </p>
  </div>
</template>
