import { createRouter, createWebHashHistory } from 'vue-router'
import IndexView from '../views/IndexView'

const routes = [
  {
    path: '/',
    name: 'index',
    component: IndexView
  },
  {
    path: '/web/details',
    name: 'details',
    component: () => import('../views/DetailsView.vue')
  },
  {
    path: '/web/list',
    name: 'list',
    component: () => import('../views/ListView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
