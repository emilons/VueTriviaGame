<template>
  <div>
    <div class="row">
      <div class="col-sm-12">
        <span>Select difficulty: </span>
        <button class="btn btn-primary" @click="handleButtonClick" :class="{'btn-danger': difficulty == 'easy'}" id="easy">Easy</button>
        <button class="btn btn-primary" @click="handleButtonClick" :class="{'btn-danger': difficulty == 'medium'}" id="medium">Medium</button>
        <button class="btn btn-primary" @click="handleButtonClick" :class="{'btn-danger': difficulty == 'hard'}" id="hard">Hard</button>
        
      </div>
    </div>
  </div>
</template>

<script>

//<button class="btn btn-primary-outline" @click="handleButtonClick" :class="{active: difficulty == easy}" id="easy">Easy</button>
//<p style="visibility: hidden">{{difficulty}}</p>
import {mapMutations} from 'vuex';
export default {
  name: 'SelectDifficulty',
  data() {
    return {
      difficulty: "easy"
    }
  },
  methods: {
    ...mapMutations(['setDifficulty']),
    handleButtonClick(e) {
      const buttonElement = e.target;
      this.difficulty = buttonElement.id;
      this.setDifficulty(this.difficulty);
    }
  }
}
</script>

<style>
.btn {
  margin: 0.5rem;
}
/*
.btn-danger {
  background-color: yellow !important;
  border-color: yellow !important;
}*/
</style>