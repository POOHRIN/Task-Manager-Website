<script setup lang="ts">
import { ref } from "vue";
import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const errorMessage = ref("");
const router = useRouter();

async function login() {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    router.push("/dashboard");
  } catch (error: any) {
    errorMessage.value = error.message;
  }
}
</script>

<template>
  <div class="max-w-sm mx-auto mt-20">
    <h2 class="text-xl font-bold mb-4">Login</h2>
    <input v-model="email" type="email" placeholder="Email" class="border p-2 w-full mb-2" />
    <input v-model="password" type="password" placeholder="Password" class="border p-2 w-full mb-2" />
    <button @click="login" class="bg-blue-500 text-white px-4 py-2 rounded w-full">Login</button>
    <p v-if="errorMessage" class="text-red-500 mt-2">{{ errorMessage }}</p>
    <p class="mt-4 text-sm">Don’t have an account? <router-link to="/register">Register</router-link></p>
  </div>
</template>