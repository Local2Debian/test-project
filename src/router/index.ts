import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: import('../views/HomeView.vue'),
    },
    {
      path: '/post',
      name: 'post',
      component: () => import('../views/PostView.vue'),
    },
    {
      path: '/:productId',
      name: 'product',
      component: () => import('../views/ProductView.vue'),
      props: true
    }
  ],
})

export default router
