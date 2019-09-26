import Vue from 'vue'
import Router from 'vue-router'
import AppStocksContainer from './views/AppStocksContainer'
import AppHome from "./views/AppHome";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: AppHome
    },
    {
      path: '/stocks',
      name: 'AppStocksContainer',
      component: AppStocksContainer
    },
    {
      path: '/portfolio',
      name: 'app-portfolio',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/AppPortfolio.vue')
    }
  ],
  mode: 'history'
})
