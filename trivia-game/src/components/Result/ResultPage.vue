<template>
    <div class="container rounded">
        <br>
        <h1>Your score was: {{playerScore}}</h1>
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
export default {
    name: 'ResultPage',
    data() {
        return {
            playerScore : this.score
        }
    },
    computed: {
        ...mapState(['score']),
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
            }, 
        },
    created(){
        this.getAllUsers();
    }
}
</script>