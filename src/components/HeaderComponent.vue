<script setup></script>

<template>
  <header class="header">
    <h1 class="header-title">Welcome!</h1>
    <nav>
      <ul class="nav-list">
        <li><RouterLink to="/" class="link">Home</RouterLink></li>
        <li><RouterLink to="/products" class="link">Products</RouterLink></li>
        <li><RouterLink to="/basics" class="link">Vue Basics</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<style>
.header {
  background-color: darkblue;
  color: white;
  padding: 20px;

  .header-title {
    text-align: center;
    margin: 0;
    margin-bottom: 40px;
  }

  .nav-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-around;

    .link {
      color: white;
      text-decoration: none;
    }
  }
}
</style>