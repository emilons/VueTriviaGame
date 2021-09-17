<template>
  <div class="container">
    <h1>Welcome to trivia night!</h1>
    <label class="form-label">Username</label>
    <input id="usernameInput" @input="onUserNameChange" type="text"/>
    <MenuOption/>
    <button class="btn btn-primary" id="startButton" @click="handleStartGame">Start Game</button>
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
    ...mapState(['username', 'error', 'difficulty', 'selectedCategory', 'selectedQuestionAmount']),
  },
  methods: {
    ...mapActions(["loginNewUser"]),
    ...mapMutations(['setUsername', 'setHighscore']),
    onUserNameChange(event){
      this.setUsername(event.target.value.trim())
    },
    handleStartGame() {
      // if username in loginAPI stuff
      //route to question pagev
      console.log(this.username);
      console.log(this.difficulty);
      console.log(this.selectedCategory.name);
      console.log(this.selectedQuestionAmount);
      this.loginNewUser()
      if (!this.error){
        this.$router.push("/game")
      }
    }
  },
}



</script>

<style>

</style>