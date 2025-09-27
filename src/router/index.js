import { createRouter, createWebHistory } from 'vue-router';
import pokemonList from '@/components/pokemonList.vue';
import pokemonDetail from '@/components/pokemonDetail.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: pokemonList,
  },
  {
    path: '/pokemon/:id',
    name: 'pokemon-detail',
    component: pokemonDetail,
    props: true,
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
