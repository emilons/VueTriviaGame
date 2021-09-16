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

import { mapActions} from 'vuex';

export default {
  name: 'SelectGameInfo',
  data() {
    
    return {
      categories: [],
      selected: {id: 1, name: "something"}
    }
  },
  async created() {
    await this.fetchCategories();
  },
  computed: {
    // ...mapState(['categories']),
  },
  methods: {
    ...mapActions(['fetchCategories'])
  }


}
</script>

<style>

</style>