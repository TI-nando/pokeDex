<template>
  <form @submit.prevent="searchPokemon" class="search-bar">
    <input v-model="searchQuery" placeholder="Buscar por nome ou ID..." />
    <button type="submit">Buscar</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const searchQuery = ref('')
const router = useRouter()

const searchPokemon = () => {
  const query = searchQuery.value.trim()
  if (query) {
    router.push(`/pokemon/${query.toLowerCase()}`)
    searchQuery.value = ''
  }
}
</script>

<style scoped>
.search-bar {
  display: flex;
  justify-content: center;
  margin: 1.5rem 0;
  gap: 0.5rem;
}
.search-bar input {
  padding: 0.5rem;
  border: 2px solid var(--retro-blue);
  border-radius: 6px;
  font-size: 1rem;
}
.search-bar button {
  padding: 0.5rem 1rem;
  border: 2px solid var(--retro-blue);
  background-color: var(--retro-yellow);
  color: #000;
  border-radius: 6px;
  cursor: pointer;
  font-family: 'Press Start 2P', cursive;
}
</style>
