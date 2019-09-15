import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', {
  //Has 5 methods - hooks: bind, inserted, update, componentUpdated, unbind (bind, update is the most important)
  bind(el, binding, vnode) {
    //el.style.backgroundColor = 'green';
    //el.style.backgroundColor = binding.value;

    let delay = 0;
    if (binding.modifiers['delayed']) {
      delay = 3000;
    }

    setTimeout(() => {
      if (binding.arg === 'background') {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay);
  }
});
new Vue({
  el: '#app',
  render: h => h(App)
});
