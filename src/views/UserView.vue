<script setup>
import { useUserStore } from '@/stores/user';
import { onMounted } from 'vue';

const userStore = useUserStore();

onMounted(async () => {
  userStore.getUsers();
})
</script>

<template>
  <h2>Users!</h2>

  <ul class="user-list">
    <li v-for="user in userStore.users" :key="user.id" class="user-card">
      <h3>{{ user.name }}</h3>
      <h4>{{ user.phone }}</h4>
    </li>
  </ul>
</template>

<style>
.user-list {
  list-style: none;

  .user-card {
    background-color: lightblue;
    margin: 10px;
    padding: 10px;
    width: 300px;
  }
}
</style>