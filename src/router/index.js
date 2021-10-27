
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
// import { createRouter, createWebHistory } from 'vue-router'
import routes from './route'

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router
