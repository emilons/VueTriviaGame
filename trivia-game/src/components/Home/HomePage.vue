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
    ...mapState(['username', 'error', 'difficulty', 'selectedCategory', 'selectedQuestionAmount', 'profile', "userExcists"]),
  },
  methods: {
    ...mapActions(['loginNewUser', 'fetchSpecificUser']),
    ...mapMutations(['setUsername', 'setHighscore']),
    onUserNameChange(event){
      this.setUsername(event.target.value.trim())
    },
    
    handleStartGame() {
      this.fetchSpecificUser(this.username)
      if (!this.error) {
        this.$router.push('/game')
      }
    },
  },
}



</script>

<style>

</style>