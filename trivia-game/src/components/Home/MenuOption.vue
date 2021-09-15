<template>
    <div>
        <select-difficulty class="option"/>
        <select-game-info class="option"/>
    </div>
</template>

<script>

import SelectDifficulty from './SelectDifficulty.vue';
import SelectGameInfo from './SelectGameInfo.vue';

export default {
  name: 'MenuOption',
  components: {
      SelectDifficulty,
      SelectGameInfo
  }
}

</script>

<style>
.option {
    margin: 0.5rem;
    background-color: grey;
}
</style>