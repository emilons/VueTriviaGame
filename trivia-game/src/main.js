import Vue from 'vue'
import App from './App.vue'
import Store from './store/index.js'

import 'bootstrap/dist/css/bootstrap.css';

Vue.config.productionTip = false

new Vue({
  Store,
  render: h => h(App),
}).$mount('#app')
