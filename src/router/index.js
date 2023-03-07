import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Index.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/wifi',
    name: 'wifi',
    component: () => import(/* webpackChunkName: "wifi" */ '@/views/WiFi.vue')
  },
  {
    path: '/cloud',
    name: 'cloud',
    component: () => import(/* webpackChunkName: "cloud" */ '@/views/Cloud.vue')
  },
  {
    path: '/alarmas',
    name: 'alarmas',
    component: () => import(/* webpackChunkName: "alarmas" */ '@/views/Alarmas.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import(/* webpackChunkName: "settings" */ '@/views/Settings.vue')
  },
  {
    path: '/time',
    name: 'time',
    component: () => import(/* webpackChunkName: "time" */ '@/views/Time.vue')
  },
  {
    path: '/action',
    name: 'action',
    component: () => import(/* webpackChunkName: "action" */ '@/views/Action.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'page404',
    component: () => import(/* webpackChunkName: "page404" */ '@/views/Page404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
