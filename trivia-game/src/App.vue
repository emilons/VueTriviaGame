<template>
  <div id="app">
    <router-view/>
    <h1>Welcome to trivia night!</h1>
    <HomePage/>
  </div>
</template>

<script>
//<HelloWorld msg="Welcome to Your Vue.js App"/>
//import HelloWorld from './components/HelloWorld.vue'
import HomePage from './components/Home/HomePage.vue'

export default {
  name: 'App',
  components: {
    HomePage
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
