<script setup>
import ChildComponent from './ChildComponent.vue';

const title2 = "Child 2 Title";

function displayMsg(msg) {
  alert(msg);
}
</script>

<template>
  <section class="parent-component">
    <h2>This is the Parent Component</h2>
  
    <ChildComponent title="Child 1 Title" @send-msg="displayMsg">
      <p>HTML content from the parent injected into the slot</p>
      <h5>Lorem ipsum dolor sit amet.</h5>
      
      <template #header>
        <h2>This is the Child header</h2>
      </template>

      <template #footer>
        <h2>Component footer</h2>
      </template>
    </ChildComponent>

    <ChildComponent :title="title2" />
  </section>
</template>

<style>
.parent-component {
  border: 2px dashed black;
  margin: 10px;
  padding: 5px;
}
</style>