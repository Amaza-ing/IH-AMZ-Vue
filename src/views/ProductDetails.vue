<script setup>
import { useProductStore } from '@/stores/product';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const productId = route.params.id;

const productStore = useProductStore();

const currentProduct = ref();

onMounted(() => {
  console.log("ProductDetails has been mounted");
  currentProduct.value = productStore.findProduct(productId);  
})
</script>

<template>
  <h2>Product details for product with id {{ productId }}</h2>

  <div v-if="currentProduct">
    <h3>{{ currentProduct.name }}</h3>
  </div>
  <div v-else>
    <h3>Product doesn't exist</h3>
  </div>
</template>

<style></style>