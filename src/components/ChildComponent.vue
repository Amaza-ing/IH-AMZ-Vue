<script setup>
const props = defineProps({
  title: String
})

const emit = defineEmits([
  "sendMsg"
])

const message = "Hello from the Child Component!";

function notify() {
  emit("sendMsg", message)
}
</script>

<template>
  <section class="child-component">
    <slot name="header"></slot>

    <h3>This is the Child Component</h3>
    <h4>{{ props.title }}</h4>
    
    <slot></slot>

    <button @click="notify">Send Message</button>

    <slot name="footer"></slot>
  </section>
</template>

<style>
.child-component {
  border: 1px dotted blue;
  margin: 5px;
  padding: 5px;
}
</style>