<script setup>
import { useProductStore } from "@/stores/product";
import ProductCard from "./ProductCard.vue";

const productStore = useProductStore();
</script>

<template>
  <ul class="product-list">
    <li v-for="product in productStore.products" :key="product.id">
      <ProductCard :product="product" @delete="productStore.deleteProduct" />
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
}
</style>
