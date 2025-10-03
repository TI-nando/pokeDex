<script setup>
defineProps({
  pokemon: Object,
})
</script>

<template>
  <router-link :to="`/pokemon/${pokemon.id}`" class="card-link">
    <li class="pokemon-card">
      <img :src="pokemon.sprites.front_default" :alt="pokemon.name" class="pokemon-image" />
      <h2 class="pokemon-name">#{{ pokemon.id }} {{ pokemon.name }}</h2>
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
  border-radius: 10px;
  color: #000;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  /* Borda com gradiente suave e fundo claro */
  border: 2px solid transparent;
  background-image: linear-gradient(180deg, #ffffff 0%, #f7f7f7 100%),
    linear-gradient(90deg, var(--retro-blue), var(--retro-yellow));
  background-origin: border-box;
  background-clip: padding-box, border-box;
}

.pokemon-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(59, 76, 202, 0.2);
}

.pokemon-image {
  width: 96px;
  height: 96px;
  image-rendering: pixelated;
}

.pokemon-name {
  font-family: 'Press Start 2P', cursive;
  font-size: 1rem;
  text-transform: capitalize;
  margin-top: 0.75rem;
  text-align: center;
  color: #000;
  /* etiqueta com gradiente suave para destacar o nome */
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  background: linear-gradient(90deg, rgba(59, 76, 202, 0.12), rgba(253, 216, 53, 0.12));
  display: inline-block;
}

.pokemon-types {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
}

.type-badge {
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  background-color: #e9ecef;
  color: #222;
  font-size: 0.75rem;
  text-transform: capitalize;
  border: 1px solid #d0d7de;
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
