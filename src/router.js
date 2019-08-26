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
      component: () => import(/* webpackChunkName: "about" */ './views/Home.vue'),
      redirect: '/box',
      children: [
        {
          path: '/box',
          name: 'box',
          component: () => import(/* webpackChunkName: "about" */ './views/Box.vue')
        },
        {
          path: '/user',
          name: 'user',
          component: () => import(/* webpackChunkName: "about" */ './views/User.vue')
        }
      ]
    }
  ]
})
