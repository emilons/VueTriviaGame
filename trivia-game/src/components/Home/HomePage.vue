<template>
     <div class="container">
    <label>Username:</label>
    <input type="text" />
    <MenuOption/>
      

  <div class="container">
    <label>Username:</label>
    <input type="text" />
    <b-button variant="primary" @click="onClickGoToQuestions">Start Game</b-button>
    <MenuOption/>

   
  </div>   
</template>

<script>


import MenuOption from './MenuOption.vue';

import{mapActions, mapMutations, mapState} from 'vuex'

export default {
  name: 'HomePage',
    components: {
    MenuOption
    },

  computed: {
    ...mapState(["error"])

  },
  methods: {
    ...mapActions(["loginUser"]),
    ...mapMutations(["setUsername", "setHighscore"]),
    onClickGoToQuestions(){
      this.loginUser()
      if (!this.error){
        this.$router.push("/questions")
      }

    },
    onUserNameChange(event){


    },

  }
} 


</script>

<style>

</style>