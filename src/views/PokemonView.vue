<template>
  <div class="pokemon-detail-container">
    <Spinner v-if="isLoading" />

    <div v-else-if="error" class="error-message">
      <h2>Oops!</h2>
      <p>{{ error }}</p>
    </div>

    <article v-else-if="currentPokemon" class="pokemon-detail-card">
      <h1 class="pokemon-name">#{{ currentPokemon.id }} {{ currentPokemon.name }}</h1>

      <img
        :src="currentPokemon.sprites.other['official-artwork'].front_default"
        :alt="currentPokemon.name"
        class="pokemon-image"
      />

      <h3>Stats</h3>
      <ul class="stats-list">
        <li v-for="stat in currentPokemon.stats" :key="stat.stat.name">
          <span class="stat-name">{{ stat.stat.name }}:</span>
          <span class="stat-value">{{ stat.base_stat }}</span>
        </li>
      </ul>
    </article>
  </div>
</template>

<script setup>
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { usePokemonStore } from '@/stores/pokemonStore'
import { storeToRefs } from 'pinia'
import Spinner from '@/components/Spinner.vue'

const route = useRoute()
const pokemonStore = usePokemonStore()
const { currentPokemon, isLoading, error } = storeToRefs(pokemonStore)
const fetchData = (pokemonName) => {
  pokemonStore.fetchPokemonByName(pokemonName)
}

onMounted(() => {
  fetchData(route.params.name)
})

watch(
  () => route.params.name,
  (newName) => {
    fetchData(newName)
  },
)
</script>

<style scoped>
.pokemon-detail-container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
}
.pokemon-detail-card {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  border: 2px solid var(--retro-blue);
  color: #000;
}
.pokemon-name {
  text-transform: capitalize;
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 1rem;
  font-family: 'Press Start 2P', cursive;
  color: #000;
}
.pokemon-image {
  width: 100%;
  max-width: 250px;
  display: block;
  margin: 1rem auto;
}
.stats-list {
  list-style: none;
  padding: 0;
}
.stats-list li {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid #efefef;
}
.stat-name {
  text-transform: capitalize;
  font-weight: bold;
  font-family: 'Press Start 2P', cursive;
  font-size: 0.8rem;
  color: #000;
}
.error-message {
  text-align: center;
  padding: 2rem;
  background-color: #fde1df;
  border-radius: 10px;
  border: 2px dashed var(--retro-red);
}
.error-message h2 {
  color: #c53030;
}
</style>
