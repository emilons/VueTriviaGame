<template>
    <div>
        <div class="row">
            <div class="col-sm-6">
                <label class="form-label">Amount of questions</label>
                <select id="questionAmount" class="form-select" v-model="amount" @change="handleSelectQuestionAmount">
                      <option v-for="(value, index) in amountOptions" :key=index :value="value">
                          {{ value }}
                      </option>
                </select>
            </div>
            <div class="col-sm-6">
                <label class="form-label">Category</label>
                <select id="categories" class="form-select" v-model="selected" @change="handleSelectCategory">
                    <option v-for="category in categories" :key="category.id" :value="category">
                        {{ category.name }}
                    </option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState, mapActions, mapMutations} from 'vuex';

export default {
  name: 'SelectGameInfo',
  data() {
    let amountOptions = [10, 15, 20, 25, 30]
    let defaultCategory = {id: 9, name: "General Knowledge"};
    return {
      amount: amountOptions[0],
      amountOptions,
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
    ...mapActions(['fetchCategories']),
    ...mapMutations(['setSelectedCategory', 'setSelectedQuestionAmount']),
    handleSelectQuestionAmount() {
      //Sets the amount of questions the user wants on the homepage
      this.setSelectedQuestionAmount(this.amount);
    },
    handleSelectCategory() {
      //Sets which category the user wants on the homepage
      this.setSelectedCategory(this.selected);
    }
  }
}
</script>

<style>

.form-select {
  text-align: center !important;
}

</style>