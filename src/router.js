import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
      redirect: '/box',
      children: [
        {
          path: '/box',
          name: 'box',
          component: () => import('./views/Box.vue')
        },
        {
          path: '/user',
          name: 'user',
          component: () => import('./views/User.vue')
        }
      ]
    },
    {
      path: '/my-material',
      name: 'my-material',
      component: () => import('./views/my-material/index.vue')
    }
  ]
})
