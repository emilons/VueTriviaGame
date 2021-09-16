<template>
  <div class="container">
    <label>Username:</label>
    <input @input="onUserNameChange" type="text"/>
    <b-button variant="primary" @click="onClickGoToQuestions">Start Game</b-button>
    <MenuOption/>
  </div>
</template>

<script>
import MenuOption from './MenuOption.vue';
import{mapActions, mapMutations, mapState} from 'vuex'
//import {loginUser} from "@/store/index.js"

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
      this.setUsername(event.target.value.trim())
    },

  }
} 


</script>

<style>

</style>