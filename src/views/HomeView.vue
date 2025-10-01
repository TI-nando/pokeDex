<template>
  <form @submit.prevent="searchPokemon" class="search-bar">
    <input
      v-model="searchQuery"
      placeholder="Buscar por nome ou ID..."
      aria-label="Buscar Pokémon"
    />
    <button type="submit">Buscar</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const searchQuery = ref('')
const router = useRouter()

const searchPokemon = () => {
  const query = searchQuery.value.trim().toLowerCase()
  if (query) {
    router.push(`/pokemon/${query}`)
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
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  width: 100%;
  max-width: 300px;
}

.search-bar button {
  padding: 0.5rem 1rem;
  border: none;
  background-color: #3498db;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}
</style>
