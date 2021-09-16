<template>
  <div class="container">
    <label class="form-label">Username</label>
    <input type="text" id="usernameInput">
    <MenuOption/>
    <button class="btn btn-primary" id="startButton" @click="handleStartGame">Start Game</button>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';
import MenuOption from './MenuOption.vue';

export default {
  name: 'HomePage',
  components: {
    MenuOption
  },
    computed: {
    ...mapState(['difficulty','selectedCategory', 'selectedQuestionAmount']),
  },
  methods: {
    ...mapMutations(['setUsername']),
    handleStartGame() {
      let username = document.getElementById("usernameInput").value;
      // if username in loginAPI stuff
      // set game states
      this.setUsername(username);

      console.log(username);
      console.log(this.difficulty);
      console.log(this.selectedCategory.name);
      console.log(this.selectedQuestionAmount);
      //route to question page
    }
  }
}

</script>

<style>

</style>