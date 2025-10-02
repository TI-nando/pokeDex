<template>
  <div>
    <Spinner v-if="isLoading" />

    <div v-else-if="error" class="error-message">
      <p>{{ error }}</p>
    </div>

    <PokemonList v-else :pokemons="pokemonList" />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { usePokemonStore } from '@/stores/pokemonStore'
import { storeToRefs } from 'pinia'
import PokemonList from '@/components/PokemonList.vue'
import Spinner from '@/components/Spinner.vue'

const store = usePokemonStore()
const { pokemonList, isLoading, error } = storeToRefs(store)

onMounted(() => {
  store.fetchPokemon()
})
</script>

<style scoped>
.error-message {
  text-align: center;
  color: var(--retro-red);
  margin-top: 2rem;
  font-family: 'Press Start 2P', cursive;
}
</style>
