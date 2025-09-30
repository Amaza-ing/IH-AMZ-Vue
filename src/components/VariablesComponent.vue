<script setup>
import { ref } from 'vue';

// let counter = 0;
const counter = ref(0);
const message = ref("This is a message");
const inputPlaceholder = ref("Write here");
const username = ref("Adrián");

setInterval(() => {
  // counter++;
  // console.log(counter);

  counter.value = counter.value + 1;  
}, 1000);

function changeMessage() {
  message.value = "You've clicked the button";
}

function deleteUsername() {
  username.value = "";
}
</script>

<template>
  <h2>Counter: {{ counter }}</h2>

  <p>{{ message }}</p>
  <button @click="changeMessage">Click Here</button>

  <br />
  <input type="text" :placeholder="inputPlaceholder">

  <br />
  <h3>{{ username }}</h3>
  <input type="text" v-model="username">
  <button @click="deleteUsername">Delete username</button>
</template>

<style></style>