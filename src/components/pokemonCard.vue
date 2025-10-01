<script setup>
defineProps({
  pokemon: Object,
})
</script>

<template>
  <router-link :to="`/pokemon/${pokemon.id}`" class="card-link">
    <li class="pokemon-card">
      <img :src="pokemon.sprites.front_default" :alt="pokemon.name" class="pokemon-image" />
      <h2 class="pokemon-name">#{{ pokemon.id }} - {{ pokemon.name }}</h2>
      <div class="pokemon-types">
        <span
          v-for="typeInfo in pokemon.types"
          :key="typeInfo.type.name"
          :class="['type-badge', `type-${typeInfo.type.name}`]"
        >
          {{ typeInfo.type.name }}
        </span>
      </div>
    </li>
  </router-link>
</template>

<style scoped>
.card-link {
  text-decoration: none;
  color: inherit;
}
.pokemon-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: #f2f2f2;
  border-radius: 10px;
  border: 1px solid #ddd;
  transition:
    transform 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out;
}

.pokemon-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.pokemon-image {
  width: 96px;
  height: 96px;
  image-rendering: pixelated;
}

.pokemon-name {
  font-family: 'Roboto', sans-serif;
  font-size: 1.1rem;
  text-transform: capitalize;
  margin: 0.5rem 0;
}

.pokemon-types {
  display: flex;
  gap: 0.5rem;
}

.type-badge {
  padding: 0.25rem 0.5rem;
  border-radius: 5px;
  background-color: #a8a878;
  color: white;
  font-size: 0.75rem;
  text-transform: capitalize;
}

/* Adicione cores para cada tipo */
.type-fire {
  background-color: #f08030;
}
.type-water {
  background-color: #6890f0;
}
.type-grass {
  background-color: #78c850;
}
.type-electric {
  background-color: #f8d030;
}
.type-psychic {
  background-color: #f85888;
}
.type-ice {
  background-color: #98d8d8;
}
.type-dragon {
  background-color: #7038f8;
}
.type-dark {
  background-color: #705848;
}
.type-fairy {
  background-color: #ee99ac;
}
.type-normal {
  background-color: #a8a878;
}
.type-fighting {
  background-color: #c03028;
}
.type-flying {
  background-color: #a890f0;
}
.type-poison {
  background-color: #a040a0;
}
.type-ground {
  background-color: #e0c068;
}
.type-rock {
  background-color: #b8a038;
}
.type-bug {
  background-color: #a8b820;
}
.type-ghost {
  background-color: #705898;
}
.type-steel {
  background-color: #b8b8d0;
}
</style>
