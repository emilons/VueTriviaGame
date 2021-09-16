<template>
    <div class="container">
        <h1>Lets play a game</h1>
        <Question :question="game[0]" @answer-clicked="handleNextQuestion"/>
    </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex';
import {getTriviaGame} from '@/api/triviaAPI.js'
import Question from './Question.vue'

// add emit from question (child) which props down the next question and add that to handleChangeQuestion

export default {
    name: 'GamePage',
    data() {
        return {
            game : []
        }
    },
    components: {
        Question
    },
    async created() {
        const [error, game] = await getTriviaGame(this.selectedQuestionAmount, this.selectedCategory, this.difficulty);
        this.game = game;
        this.setError(error);
        game.forEach(element => {
            element.answers = [element.correct_answer, ...element.incorrect_answers].sort((a, b) => {
                    return a.localeCompare(b)
                })
        });
    },
    computed: {
        ...mapState(['difficulty', 'selectedCategory', 'selectedQuestionAmount','error']),
    },
    methods: {
        ...mapMutations(['setError']),
        handleNextQuestion(answer) {
            console.log(answer)
        }
    }
}

</script>

<style>

</style>