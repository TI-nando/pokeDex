<template>
  <div>
    <h1>Lista de Pokémon</h1>
    <!-- O controle de loading e erro agora é feito pela HomeView -->
    <ul class="pokemon-grid">
      <PokemonCard v-for="pokemon in pokemons" :key="pokemon.id" :pokemon="pokemon" />
    </ul>
  </div>
</template>

<script setup>
import PokemonCard from '@/components/PokemonCard.vue'

defineProps({
  pokemons: {
    type: Array,
    required: true,
  },
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

.pokemon-card-skeleton {
  height: 180px; /* Altura similar ao card real */
  background-color: #f2f2f2;
  border-radius: 10px;
  animation: pulse 1.5s infinite ease-in-out;
}

@keyframes pulse {
  0% {
    background-color: #f2f2f2;
  }
  50% {
    background-color: #e0e0e0;
  }
  100% {
    background-color: #f2f2f2;
  }
}
</style>
