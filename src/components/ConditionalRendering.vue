<script setup>
import { ref } from 'vue';

const isLoggedIn = ref(false);

function login() {
  isLoggedIn.value = true;
}

function logout() {
  isLoggedIn.value = false;
}
</script>

<template>
  <p v-if="isLoggedIn">Welcome, user!</p>
  <p v-else>You need to log in</p>

  <button @click="login">Login</button>
  <button @click="logout">Log out</button>
</template>

<style></style>