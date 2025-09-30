import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePokemonStore = defineStore('pokemon', () => {
  const pokemonList = ref([])
  const currentPokemon = ref(null)
  const isLoading = ref(false)
  const error = ref(null)

  async function fetchPokemon(limit = 151) {
    isLoading.value = true
    error.value = null

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
      if (!response.ok) {
        throw new Error('Failed to fetch Pokémon list')
      }
      const data = await response.json()

      const detailPromises = data.results.map(async (pokemon) => {
        const res = await fetch(pokemon.url)
        if (!res.ok) {
          throw new Error(`Falha ao buscar detalhes de ${pokemon.name}`)
        }
        return res.json()
      })

      pokemonList.value = await Promise.all(detailPromises)
    } catch (err) {
      error.value = err.message
      console.error('Erro na Store:', err)
    } finally {
      isLoading.value = false
    }
  }

  async function fetchPokemonByName(nameOrId) {
    isLoading.value = true
    error.value = null
    currentPokemon.value = null

    try {
      console.log(`Buscando por: ${nameOrId}`)
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId.toLowerCase()}`)
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error(`Pokémon "${nameOrId}" não encontrado.`)
        }
        throw new Error(`Falha ao buscar Pokémon: ${nameOrId}`)
      }
      const data = await response.json()
      currentPokemon.value = data
    } catch (err) {
      error.value = err.message
      console.error('Erro ao buscar Pokémon por nome/ID:', err)
    } finally {
      isLoading.value = false
    }
  }

  return {
    pokemonList,
    currentPokemon,
    isLoading,
    error,
    fetchPokemon,
    fetchPokemonByName,
  }
})
