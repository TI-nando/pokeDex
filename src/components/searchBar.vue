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
const router = useRouter() // Pega a instância do router

const searchPokemon = () => {
  const query = searchQuery.value.trim()
  if (query) {
    // Navega para a página de detalhes do pokémon pesquisado
    router.push(`/pokemon/${query.toLowerCase()}`)
    searchQuery.value = '' // Limpa o campo de busca após a pesquisa
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
}
.search-bar button {
  padding: 0.5rem 1rem;
  border: none;
  background-color: #3498db;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}
</style>
