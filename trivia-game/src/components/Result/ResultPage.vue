<template>
    <div>
        <h1>Result Page</h1>
        <input @input="onSearchChange" type="text" />
        <h3>Results</h3>
        <ul v-for="result in searchedResults" :key="result.id">
            <li>{{result.username}} {{result.score}} {{result.highScore}} </li>
        </ul>
    </div>
</template>

<script>
import{mapActions, mapMutations, mapGetters} from 'vuex'
//import{Result} from '@/components/Result/Result.vue'
export default {
    name: 'ResultPage',
    components: {
        //Result,
        },
    computed: {
        ...mapGetters(["searchedResults"])
        },
    methods: {
            ...mapActions(["getAllUsers"]),
            ...mapMutations(['setSearchText']),
            onSearchChange(event) {
                this.setSearchText(event.target.value.trim())
            } 
        },
    created(){
        this.getAllUsers()

    }
    

}
</script>