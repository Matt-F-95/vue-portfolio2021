import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/madmovies',
    name: 'madmovies',
    component: () => import('../views/MadMovies.vue')
  },
  {
    path: '/foeapp',
    name: 'foeapp',
    component: () => import('../views/FoeApp.vue')
  },
  {
    path: '/actionltd',
    name: 'actionltd',
    component: () => import('../views/ActionLtd.vue')
  },
  {
    path: '/vachephotobooth',
    name: 'vachephotobooth',
    component: () => import('../views/DurhamOne.vue')
  },
  {
    path: '/easygroceries',
    name: 'easygroceries',
    component: () => import('../views/EasyGroceries.vue')
  },
  {
    path: '/durhamone',
    name: 'durhamone',
    component: () => import('../views/DurhamOne.vue')
  },
  {
    path: '/honeycakes',
    name: 'honeycakes',
    component: () => import('../views/HoneyCakes.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
