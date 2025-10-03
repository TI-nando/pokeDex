<template>
  <div>
    <h1 class="page-title">Detalhes do Pokémon</h1>

    <div v-if="store.isLoading" class="loading-message">
      <p>Buscando Pokémon...</p>
    </div>
    <div v-else-if="store.error" class="error-message">
      <p>Erro: {{ store.error }}</p>
    </div>

    <div v-else-if="store.currentPokemon" class="pokemon-details-card">
      <h3 class="pokemon-title">{{ store.currentPokemon.name }} (#{{ store.currentPokemon.id }})</h3>
      <img :src="store.currentPokemon.sprites.front_default" :alt="store.currentPokemon.name" />
      <p>Altura: {{ store.currentPokemon.height / 10 }} M</p>
      <p>Peso: {{ store.currentPokemon.weight / 10 }} KG</p>
      <div class="type-section">
        <span class="label">Tipo:</span>
        <div class="types">
          <span
            v-for="typeInfo in store.currentPokemon.types"
            :key="typeInfo.slot"
            :class="['type-badge', `type-${typeInfo.type.name}`]"
          >
            {{ typeInfo.type.name }}
          </span>
        </div>
      </div>
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
.page-title {
  color: #000;
  text-align: center;
}
.pokemon-details-card {
  color: #000;
}
.pokemon-title,
.pokemon-details-card p {
  color: #000;
}
.type-section {
  margin-top: 0.75rem;
}
.types {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.type-badge {
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  background-color: #e9ecef;
  color: #222;
  font-size: 0.85rem;
  text-transform: capitalize;
  border: 1px solid #d0d7de;
}
/* Cores por tipo iguais aos cards */
.type-fire { background-color: #f08030; }
.type-water { background-color: #6890f0; }
.type-grass { background-color: #78c850; }
.type-electric { background-color: #f8d030; }
.type-psychic { background-color: #f85888; }
.type-ice { background-color: #98d8d8; }
.type-dragon { background-color: #7038f8; }
.type-dark { background-color: #705848; }
.type-fairy { background-color: #ee99ac; }
.type-normal { background-color: #a8a878; }
.type-fighting { background-color: #c03028; }
.type-flying { background-color: #a890f0; }
.type-poison { background-color: #a040a0; }
.type-ground { background-color: #e0c068; }
.type-rock { background-color: #b8a038; }
.type-bug { background-color: #a8b820; }
.type-ghost { background-color: #705898; }
.type-steel { background-color: #b8b8d0; }
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
