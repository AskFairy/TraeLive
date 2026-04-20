import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/videos',
    name: 'VideoList',
    component: () => import('@/views/VideoList.vue')
  },
  {
    path: '/videos/:id',
    name: 'VideoDetail',
    component: () => import('@/views/VideoDetail.vue')
  },
  {
    path: '/publish',
    name: 'VideoPublish',
    component: () => import('@/views/VideoPublish.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/Profile.vue')
  }
];

const router = createRouter({
  history: createWebHistory('/'),
  routes
});

export default router;
