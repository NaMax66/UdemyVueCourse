import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL = 'https://vuejs-http-8d08f.firebaseio.com';

//I can add my own headers
//axios.defaults.headers.common['Authorization'] = 'Hard stuff';
//axios.defaults.headers.get['Accepts'] = 'application/json';

//functions like hooks
const reqInterceptor = axios.interceptors.request.use(config => {
  console.log(config);
  return config;
});

const resInterceptor = axios.interceptors.response.use(res => {
  console.log(res);
  return res;
});

//I can delete them
axios.interceptors.request.eject(reqInterceptor);
axios.interceptors.response.eject(resInterceptor);



new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
