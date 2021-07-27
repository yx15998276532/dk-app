import Vue from 'vue'
import VueRouter from 'vue-router'
import Publication from '../views/publication.vue'
import Home from '../views/Home.vue'
import Details from '../components/details.vue'
import Login from "../views/Login.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: Home,
  },{
    path: '/publication',
    component: Publication,
  },{
      path: '/details',
      component: Details 
  },{
    path: '/',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
