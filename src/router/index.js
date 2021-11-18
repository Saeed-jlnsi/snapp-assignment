import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Passengers',
    redirect: '/passengers',
    component: () => import(/* webpackChunkName: "passengers" */ '../views/Passengers/index.vue')
  },
  {
    path: '/passengers',
    name: 'Passengers',
    component: () => import(/* webpackChunkName: "passengers" */ '../views/Passengers/index.vue')
  },
  {
    path: '/Passenger',
    name: 'Passenger',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "passenger" */ '../views/Passenger/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
