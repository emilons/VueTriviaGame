<template>
  <div class="container">
    <label>Username:</label>
    <input type="text" />
    <MenuOption/>
  </div>
</template>

<script>

import MenuOption from './MenuOption.vue';

export default {
  name: 'HomePage',
  components: {
    MenuOption
  }
}

</script>

<style>

</style>