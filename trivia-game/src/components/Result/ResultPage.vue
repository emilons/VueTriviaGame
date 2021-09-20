<template>
    <div class="container rounded">
        <br>
        <div id="playerResults">
            <h1>Your score was: {{this.score}}</h1>
            <div v-for="(result, index) in this.correctAnswers" :key="index">
                <result-question :index="index"/>
            </div>
        </div>
        <h3 class="my-3">Results</h3>
        <label class="form-label m-3">Filter by username:</label>
        <input @input="onSearchChange" type="text" />
        <ul v-for="result in searchedResults" :key="result.id">
            <li>Username: {{result.username}} --- Score: {{result.score}} {{result.highScore}} </li>
        </ul>
        <div class="row">
            <div class="col-sm-3"></div>
            <div class="col-sm-6">
                <button class="btn btn-primary mb-4" id="backButton" @click="handleBack">Back to menu</button>
                <button class="btn btn-primary mb-4" id="restartButton" @click="handleRestart">Play again</button>
            </div>
            <div class="col-sm-3"></div>
        </div>
        
    </div>
</template>

<script>
import{mapState, mapActions, mapMutations, mapGetters} from 'vuex'
import ResultQuestion from './ResultQuestion.vue';
export default {
    name: 'ResultPage',
    components: {
        ResultQuestion
    },
    computed: {
        ...mapState(['score', 'correctAnswers', 'playerChoices', 'questions']),
        ...mapGetters(["searchedResults"])
        },
    methods: {
            ...mapActions(['getAllUsers', 'fetchSpecificUser']),
            ...mapMutations(['setSearchText', 'setDefault', 'setRestart']),
            onSearchChange(event) {
                this.setSearchText(event.target.value.trim())
            },
            handleBack() {
                this.setDefault();
                if (!this.error) {
                    this.$router.push('/');
                }
            },
            handleRestart() {
                this.setRestart();
                this.fetchSpecificUser(this.username);
                if (!this.error) {
                    this.$router.push('/game');
                }
            }
        },
    created(){
        this.getAllUsers();
    }
}
</script>