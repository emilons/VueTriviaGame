<template>
    <div>
        <div class="row">
            <div class="col-sm-6">
                <p>number of questions</p>
            </div>
            <div class="col-sm-6">
                <p>category</p>
                <select id="categories" v-model="selected">
                    <option v-for="category in categories" :key="category.id" :value="category">
                        {{ category.name }}
                    </option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>

import {mapState, mapActions} from 'vuex';

export default {
  name: 'SelectGameInfo',
  data() {
    let defaultCategory = {id: 9, name: "General Knowledge"}
    return {
      selected: defaultCategory
    }
  },
  async created() {
    await this.fetchCategories();
  },
  computed: {
    ...mapState(['categories']),
  },
  methods: {
    ...mapActions(['fetchCategories'])
  }
}
</script>

<style>

</style>