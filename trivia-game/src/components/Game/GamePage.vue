<template>
    <div>
        <h1>Question Page</h1>
        <button class="btn btn-primary" id="updateButton" @click="handleUpdate">update</button>

    </div>
</template>

<script>
import{mapActions, mapMutations, mapState} from 'vuex'

export default {
    name: 'QuestionPage',
        components: {
    },
        computed: {
    ...mapState(['score']),
  },
    methods: {
        ...mapActions(["updateScore"]),
        ...mapMutations(['setHighscore']),
        handleUpdate(){
            console.log(this.score)
            this.updateScore()
        }
    },
    

}
</script>