<script setup>
import { ref } from "vue";

const products = ref([
  {
    id: 1,
    name: "computer",
    price: 1000,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Desktop_computer_clipart_-_Yellow_theme.svg/1200px-Desktop_computer_clipart_-_Yellow_theme.svg.png",
  },
  {
    id: 2,
    name: "keyboard",
    price: 50,
    img: "https://m.media-amazon.com/images/I/614GO7cAxaL._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: 3,
    name: "mouse",
    price: 20,
    img: "https://m.media-amazon.com/images/I/61UxfXTUyvL._AC_UF894,1000_QL80_DpWeblab_.jpg",
  },
]);
</script>

<template>
  <ul class="product-list">
    <li v-for="product in products" :key="product.id">
      <article class="product-card">
        <h2 class="product-name">{{ product.name }}</h2>
        <img :src="product.img" alt="product image" width="100" />
        <h4>{{ product.price }}€</h4>
      </article>
    </li>
  </ul>
</template>

<style>
.product-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 20px;

  .product-card {
    width: 150px;
    height: 250px;
    background-color: lightgray;
    padding: 5px 15px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .product-name {
      font-size: 28px;
    }
  }
}
</style>
