<script setup>
import ConditionalRendering from './components/ConditionalRendering.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import ListRendering from './components/ListRendering.vue';
import ParentComponent from './components/ParentComponent.vue';
import ProductList from './components/ProductList.vue';
import VariablesComponent from './components/VariablesComponent.vue';

</script>

<template>
  <HeaderComponent />

  <h2>This is a website created with Vue.js</h2>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat temporibus natus aliquid, ad itaque voluptatem eos repudiandae distinctio cum, accusantium voluptatibus modi minima? Ratione eaque inventore asperiores dolores distinctio dolore!</p>

  <VariablesComponent />
  <ConditionalRendering />
  <ListRendering />
  <ProductList />
  <ParentComponent />
</template>

<style scoped></style>
