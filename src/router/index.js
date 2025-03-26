import { createRouter, createWebHistory } from 'vue-router'

import AboutView from '@/views/AboutView.vue'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import { useUserStore } from '@/stores/auth'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { requireAuth: false },
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: { requireAuth: true },
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: { requireAuth: false },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const auth = useUserStore().user.token
  const needAuth = to.meta.requireAuth

  if (needAuth && !auth) {
    next('login')
  } else {
    next()
  }
})

export default router
