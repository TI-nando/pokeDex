<template>
  <div>
    <h1>Detalhes do Pokémon</h1>

    <div v-if="store.isLoading" class="loading-message">
      <p>Buscando Pokémon...</p>
    </div>
    <div v-else-if="store.error" class="error-message">
      <p>Erro: {{ store.error }}</p>
    </div>

    <div v-else-if="store.currentPokemon" class="pokemon-details-card">
      <h3>{{ store.currentPokemon.name }} (#{{ store.currentPokemon.id }})</h3>
      <img :src="store.currentPokemon.sprites.front_default" :alt="store.currentPokemon.name" />
      <p>Altura: {{ store.currentPokemon.height / 10 }} M</p>
      <p>Peso: {{ store.currentPokemon.weight / 10 }} KG</p>
      <p>
        Tipo:
        <span v-for="typeInfo in store.currentPokemon.types" :key="typeInfo.slot">
          {{ typeInfo.type.name }}
        </span>
      </p>
    </div>
    <div v-else class="not-found-message">
      <p>Nenhum Pokémon para exibir. Tente pesquisar por um.</p>
    </div>

    <button @click="goBack" class="back-button">Voltar</button>
  </div>
</template>

<script setup>
import { onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { usePokemonStore } from '@/stores/pokemonStore'

const store = usePokemonStore()
const route = useRoute()
const router = useRouter()

const fetchDetails = (id) => {
  if (id) {
    store.fetchPokemonByName(id)
  }
}

const goBack = () => {
  router.back()
}

// Busca o Pokémon quando o componente é montado
onMounted(() => {
  fetchDetails(route.params.id)
})

// Observa mudanças no parâmetro da rota para buscar um novo Pokémon
watch(
  () => route.params.id,
  (newId) => {
    fetchDetails(newId)
  },
)
</script>

<style scoped>
.back-button {
  margin-top: 2rem;
  padding: 0.5rem 1rem;
  border: none;
  background-color: #f2f2f2;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid #ddd;
}
</style>
