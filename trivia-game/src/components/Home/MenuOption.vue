<template>
    <div>
        <select-difficulty class="option rounded"/>
        <select-game-info class="option rounded"/>
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

</style>