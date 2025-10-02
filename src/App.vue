<script setup>
import { RouterView } from 'vue-router'
import SearchBar from './components/SearchBar.vue'
</script>

<template>
  <header class="main-header">
    <router-link to="/" aria-label="Início" class="logo-link">
      <img src="/pokemonlogo.png" alt="Pokédex" class="logo" />
    </router-link>
    <h1><router-link to="/" class="header-title">Pokédex Retrô</router-link></h1>
  </header>

  <main class="container">
    <SearchBar />
    <RouterView />
  </main>

  <footer class="main-footer">
    <p class="footer-text">Criado por Fernando Henrique • {{ new Date().getFullYear() }}</p>
  </footer>
</template>

<style scoped>
.main-header {
  background: linear-gradient(180deg, #f2f2f2 0%, #e6e6e6 100%);
  color: #000;
  padding: 1rem 2rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-bottom: 4px solid var(--retro-yellow);
}

.header-title {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}
.logo-link {
  display: inline-flex;
}

.main-header h1 {
  color: #ffd12a;
  text-shadow:
    0 2px 0 #2a2a2a,
    0 0 8px rgba(0, 0, 0, 0.15);
  margin: 0;
}

.logo {
  height: 50px;
  width: auto;
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
  color: var(--retro-dark);
  border-top: 2px dashed var(--retro-blue);
}
.footer-text {
  font-family: 'Press Start 2P', cursive;
  font-size: 0.75rem;
}
</style>
