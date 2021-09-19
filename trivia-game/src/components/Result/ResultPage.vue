<template>
    <div class="container rounded">
        <br>
        <div id="playerResults">
            <h1>Your score was: {{playerScore}}</h1>
            <div v-for="(result, index) in this.correctAnswers" :key="index">
                <result-question :index="index"/>
            </div>
        </div>
        <label class="form-label m-3">Filter by username:</label>
        <input @input="onSearchChange" type="text" />
        <h3 class="my-3">Results</h3>
        <ul v-for="result in searchedResults" :key="result.id">
            <li>Username: {{result.username}} --- Score: {{result.score}} {{result.highScore}} </li>
        </ul>
        <button class="btn btn-primary mb-4" id="BackButton" @click="handleRestart">Restart</button>
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
    data() {
        return {
            playerScore : this.score
        }
    },
    computed: {
        ...mapState(['score', 'correctAnswers', 'playerChoices', 'questions']),
        ...mapGetters(["searchedResults"])
        },
    methods: {
            ...mapActions(["getAllUsers"]),
            ...mapMutations(['setSearchText']),
            onSearchChange(event) {
                this.setSearchText(event.target.value.trim())
            },
            handleRestart() {
                if (!this.error) {
                    this.$router.push('/')
                }
            }
        },
    created(){
        this.getAllUsers();
    }
}
</script>