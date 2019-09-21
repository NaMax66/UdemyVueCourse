import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-http-8d08f.firebaseio.com/';
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  if (request.method === 'POST') {
    request.method = 'PUT'; /*не создаёт уникальный ключ как POST*/
  }
  next(res => {
    res.json = () => { return {messages: res.body} }
  });
});


new Vue({
  el: '#app',
  render: h => h(App)
})
