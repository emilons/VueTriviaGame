import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import Store from './store/index.js'


import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';

Vue.use(BootstrapVue);

Vue.config.productionTip = false

new Vue({
  router,
  Store,

  render: h => h(App),
}).$mount('#app')
