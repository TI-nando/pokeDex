<script setup>
import { RouterView } from 'vue-router'
import searchBar from './components/searchBar.vue'
</script>

<template>
  <header class="main-header">
    <img src="" alt="logo" class="logo" />
    <h1>Pokédex com Vue.js</h1>
  </header>

  <main class="container">
    <searchBar />
    <RouterView />
  </main>

  <footer class="main-footer">
    <p>Criado em {{ new Date().getFullYear() }}</p>
  </footer>
</template>

<style scoped>
.main-header {
  background-color: #ef5350;
  color: white;
  padding: 1rem 2rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
.logo {
  height: 40px;
}
.container {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
}
.main-footer {
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
  color: #666;
  border-top: 1px solid #eee;
}
</style>
