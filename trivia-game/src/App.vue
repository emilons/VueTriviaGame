<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    
    <Start msg="HEIA"/>
  </div>
</template>

<script>
//<HelloWorld msg="Welcome to Your Vue.js App"/>
//import HelloWorld from './components/HelloWorld.vue'
import Start from './components/Start.vue'

export default {
  name: 'App',
  components: {
    Start
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
