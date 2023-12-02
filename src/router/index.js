import Vue from 'vue'
import VueRouter from 'vue-router'
import TherapistsView from '../views/TherapistsView.vue'
import CalenderView from '../components/CalenderView.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  {
    path: '/therapists',
    name: 'TherapistsView',
    component: TherapistsView
  },
  {
    path: '/',
    name: 'HomeView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue')
  },
  {
    path: '/calender',
    name: 'CalenderView',
    component: CalenderView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
