import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/home/Home.vue'

const routes = [
  {
    path: '',
    // redirect重定向
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/home/Home.vue')
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
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "about" */ '../views/profile/Profile.vue')
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import(/* webpackChunkName: "about" */ '../views/category/Category.vue')
  },
  {
    path: '/shopcart',
    name: 'Shopcart',
    component: () => import(/* webpackChunkName: "about" */ '../views/shopcart/Shopcart.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
