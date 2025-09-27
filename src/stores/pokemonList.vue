<template>
  <div>
    <h1>Lista de Pokémon</h1>
    <p v-if="store.isLoading">Carregando Pokémon...</p>
    <p v-if="store.error" style="color: red">Erro: {{ store.error }}</p>

    <ul>
      v-if="!store.isLoading && !store.error">
      <li v-for="pokemon in store.pokemonList" :key="pokemon.id">
        <img src="pokemon.sprites.front_default" alt="pokemon.name" width="50" height="50" />
        {{ pokemon.name }} (ID: {{ pokemon.id }})
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { userPokemonStore } from '@/stores/pokemonStore'

const store = userPokemonStore()

onMounted(() => {
  store.fetchPokemon()
})
</script>
