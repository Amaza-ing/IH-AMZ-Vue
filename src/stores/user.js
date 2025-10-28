import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("users", () => {
  const API_URL = "https://jsonplaceholder.typicode.com/users"

  const users = ref([]);

  const getUsers = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      users.value = data;
    } catch (e) {
      console.log(e);      
    }
  }

  return {
    users,
    getUsers
  }
})