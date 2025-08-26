<script setup lang="ts">
import { ref } from "vue";
import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const errorMessage = ref("");
const router = useRouter();

async function register() {
  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value);
    router.push("/dashboard");
  } catch (error: any) {
    errorMessage.value = error.message;
  }
}
</script>

<template>
  <div class="max-w-sm mx-auto mt-20">
    <h2 class="text-xl font-bold mb-4">Register</h2>
    <input v-model="email" type="email" placeholder="Email" class="border p-2 w-full mb-2" />
    <input v-model="password" type="password" placeholder="Password" class="border p-2 w-full mb-2" />
    <button @click="register" class="bg-green-500 text-white px-4 py-2 rounded w-full">Register</button>
    <p v-if="errorMessage" class="text-red-500 mt-2">{{ errorMessage }}</p>
    <p class="mt-4 text-sm">Already have an account? <router-link to="/login">Login</router-link></p>
  </div>
</template>