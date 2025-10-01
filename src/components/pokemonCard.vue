<script setup>
defineProps({
  pokemon: Object,
})
</script>

<template>
  <router-link :to="`/pokemon/${pokemon.name}`" class="card-link">
    <li class="pokemon-card">
      <img :src="pokemon.sprites.front_default" :alt="pokemon.name" class="pokemon-image" />
      <h2 class="pokemon-name">#{{ pokemon.id }} - {{ pokemon.name }}</h2>
      <div class="pokemon-types">
        <span v-for="typeInfo in pokemon.types" :key="typeInfo.type.name" class="type-badge">
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
</style>
