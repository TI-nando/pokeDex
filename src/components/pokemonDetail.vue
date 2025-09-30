<template>
  <div>
    <h2>Buscar Pokémon</h2>
    <input v-model="searchQuery" placeholder="Nome ou ID do Pokémon" />
    <button @click="searchPokemon">Buscar</button>

    <p v-if="store.isLoading">Buscando Pokémon...</p>
    <p v-if="store.error" style="color: red">Erro: {{ store.error }}</p>

    <div v-if="store.currentPokemon && !store.isLoading && !store.error">
      <h3>{{ store.currentPokemon.name }} (#{{ store.currentPokemon.id }})</h3>
      <img :src="store.currentPokemon.sprites.front_default" :alt="store.currentPokemon.name" />
      <p>Altura: {{ store.currentPokemon.height / 10 }} M</p>
      <p>Peso: {{ store.currentPokemon.weight / 10 }} KG</p>
      <p>
        Tipo:
        <span v-for="typeInfo in store.currentPokemon.types" :key="typeInfo.slot">{{
          typeInfo.type.name
        }}</span>
      </p>
    </div>
    <p v-else-if="!store.currentPokemon && !store.isLoading && !store.error">
      Nenhum Pokémon encontrado.
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { usePokemonStore } from '@/stores/pokemonStore'

const store = usePokemonStore()
const searchQuery = ref('')
const searched = ref(false)

const searchPokemon = () => {
  if (searchQuery.value.trim()) {
    store.fetchPokemonByName(searchQuery.value.trim())
    searched.value = true
  }
}
</script>
