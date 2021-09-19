<template>
  <div class="container rounded">
    <br>
    <h1>Welcome to trivia night!</h1>
    <div class="rounded" id="username">
      <label class="form-label m-3">Username:</label>
      <input class="rounded" id="usernameInput" @input="onUserNameChange" type="text"/>
    </div>
    <menu-option/>
    <button class="btn btn-primary mb-4" id="startButton" @click="handleStartGame">Start Game</button>
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
    
    //Fetches this specific user based on the username input and routes to the game page.
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