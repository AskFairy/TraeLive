import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Live from '@/views/Live.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/live',
    name: 'Live',
    component: Live
  }
];

const router = createRouter({
  history: createWebHistory('/'),
  routes
});

export default router;
