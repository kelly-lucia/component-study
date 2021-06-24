import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home,
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
  { path: '/', redirect: '/button' },
  {
    path: '/button',
    name: 'Button',
    component: () =>
      import(/* webpackChunkName: "ButtonCase" */ '../views/ButtonCase.vue'),
  },
  {
    path: '/icon',
    name: 'Icon',
    component: () =>
      import(/* webpackChunkName: "IconCase" */ '../views/IconCase.vue'),
  },
  {
    path: '/card',
    name: 'Card',
    component: () =>
      import(/* webpackChunkName: "CardCase" */ '../views/CardCase.vue'),
  },
  {
    path: '/divider',
    name: 'Divider',
    component: () =>
      import(/* webpackChunkName: "DividerCase" */ '../views/DividerCase.vue'),
  },
  {
    path: '/checkbox',
    name: 'Checkbox',
    component: () =>
      import(/* webpackChunkName: "CheckboxCase" */ '../views/CheckboxCase.vue'),
  },
  {
    path: '/table',
    name: 'Table',
    component: () =>
      import(/* webpackChunkName: "TableCase" */ '../views/TableCase.vue'),
  },
  {
    path: '/input',
    name: 'Input',
    component: () =>
      import(/* webpackChunkName: "InputCase" */ '../views/InputCase.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

