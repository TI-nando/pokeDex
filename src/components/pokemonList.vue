<template>
  <div>
    <h1>Lista de Pokémon</h1>

    <div v-if="store.isLoading">
      <p>Carregando Pokémon...</p>
    </div>
    <div v-else-if="store.error" style="color: red">
      <p>Erro: {{ store.error }}</p>
    </div>

    <ul v-else class="pokemon-grid">
      <PokemonCard v-for="pokemon in store.pokemonList" :key="pokemon.id" :pokemon="pokemon" />
    </ul>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { usePokemonStore } from '@/stores/pokemonStore'
import PokemonCard from '@/components/pokemonCard.vue'

const store = usePokemonStore()

onMounted(() => {
  store.fetchPokemon()
})
</script>

<style scoped>
.pokemon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1.5rem;
  list-style: none;
  padding: 0;
}
</style>
