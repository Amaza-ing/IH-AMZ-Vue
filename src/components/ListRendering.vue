<script setup>
  const names = ["Ana", "Ana", "Carlos", "David", "Luis"];
</script>

<template>
  <ul>
    <li v-for="(name, index) in names" :key="index">{{ name }}</li>
  </ul>
</template>

<style></style>