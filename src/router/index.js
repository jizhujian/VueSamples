import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/gridppreport',
    name: 'gridppreport',
    component: () => import('../views/GridppReport.vue')
  },
  {
    path: '/activereport',
    name: 'activereport',
    component: () => import('../views/ActiveReport.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
