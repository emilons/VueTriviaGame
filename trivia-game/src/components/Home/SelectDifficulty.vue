<template>
    <div>
      <span>Select difficulty</span>
      <button class="btn btn-primary" @click="handleButtonClick"  id="easy">Easy</button>
      <button class="btn btn-primary" @click="handleButtonClick"  id="medium">Medium</button>
      <button class="btn btn-primary" @click="handleButtonClick"  id="hard">Hard</button>
      <p>{{difficulty}}</p>
      
    </div>
</template>

<script>

//<button class="btn btn-primary-outline" @click="handleButtonClick" :class="{active: difficulty == easy}" id="easy">Easy</button>

export default {
  name: 'SelectDifficulty',
  data() {
    return {
      difficulty: "easy"
    }
  },
  methods: {
    handleButtonClick(e) {
      this.difficulty = e.target.id;
    }
  }
}
</script>

<style>
.btn {
  margin: 0.5rem;
}

.active {
  color:green;
  background-color: red;
}
</style>