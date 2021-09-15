import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import Store from './store/index.js'

import 'bootstrap/dist/css/bootstrap.css';

Vue.config.productionTip = false

new Vue({
  router,
  Store,
  render: h => h(App),
}).$mount('#app')
