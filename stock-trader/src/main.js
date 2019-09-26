
import BootstrapVue from "bootstrap-vue"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import VueResource from 'vue-resource'

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString('en');
});
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueResource);
Vue.http.options.root = 'https://stock-trader-961d1.firebaseio.com/';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
