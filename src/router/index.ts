import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/beneficios',
      name: 'beneficts',
      component: () => import('../views/BenefictsView.vue'),
    },
    {
      path: '/ingredientes',
      name: 'ingredients',
      component: () => import('../views/IngredientsView.vue'),
    },
    {
      path: '/preguntas',
      name: 'faqs',
      component: () => import ('../views/FaqsView.vue')
    }

  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})

export default router
