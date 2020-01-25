import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Texts from '../views/texts/Texts.vue'
import ShowText from '../views/texts/ShowText.vue'
import CreateText from '../views/texts/CreateText.vue'
import EditText from '../views/texts/EditText.vue'
import CreateAnswerSheet from '../views/answerSheet/CreateAnswerSheet.vue'

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
    path: '/texts/:id/edit',
    name: 'editText',
    component: EditText,
    props: true,
  },
  {
    path: '/texts/:id/answer_sheets/new',
    name: 'createAnswerSheet',
    component: CreateAnswerSheet,
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
