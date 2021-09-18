<template>
    <div>
        <h1>Result Page</h1>
        <input @input="onSearchChange" type="text" />
        <h3>Results</h3>
        <ul v-for="result in searchedResults" :key="result.id">
            <li>Username: {{result.username}} --- Score: {{result.score}} {{result.highScore}} </li>
        </ul>
        <button class="btn btn-primary" id="BackButton" @click="handleRestart">Restart</button>
    </div>
</template>

<script>
import{mapActions, mapMutations, mapGetters} from 'vuex'
export default {
    name: 'ResultPage',
    components: {
        },
    computed: {
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
        this.getAllUsers()
    }
}
</script>