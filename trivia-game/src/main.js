import Vue from 'vue'
import App from './App.vue'
import router from "./router/router.js"
import store from './store/store.js'
import 'bootstrap/dist/css/bootstrap.css';


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
