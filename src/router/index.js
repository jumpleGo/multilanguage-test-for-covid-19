import Vue from 'vue'
import VueRouter from 'vue-router'
import MainComponent from '@/components/MainComponent'
import Quiz from "@/components/Steps/Index"
import Result from "@/components/Steps/Final"
import Pay from "@/components/Steps/Pay"
import Policy from "@/components/Policy"
import Contacts from "@/components/Contacts"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainComponent
  },
  {
    path: '/quiz',
    name: 'quiz',
    component: Quiz
  },
  {
    path: '/result',
    name: 'result',
    component: Result,
    props: true
  },
  {
    path: '/pay',
    name: 'pay',
    component: Pay,
    props: true
  },
  {
    path: '/policy',
    name: 'policy',
    component: Policy,
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: Contacts,
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
