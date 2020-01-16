import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Texts from '../views/texts/Texts.vue'
import ShowText from '../views/texts/ShowText.vue'
import CreateText from '../views/texts/CreateText.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'texts',
    component: Texts
  },
  {
    path: '/texts/new',
    name: 'createText',
    component: CreateText
  },
  {
    path: '/texts/:id',
    name: 'showText',
    component: ShowText,
    props: true,
  },
  {
    path: '/semantic',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
