import Vue from 'vue'
import App from './App.vue'
import StartScreen from './StartScreen'


Vue.config.productionTip = false

new Vue({
  StartScreen,
  render: h => h(App),
}).$mount('#app')
