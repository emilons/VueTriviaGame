<template>
    <div class="container">
        <h1>Lets play a game</h1>
        <Question :question="game[currentQuestionIndex]" @answer-clicked="handleNextQuestion"/>
    </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex';
import {getTriviaGame} from '@/api/triviaAPI.js'
import Question from './Question.vue'

export default {
    name: 'GamePage',
    data() {
        return {
            currentQuestionIndex : 0,
            game : [],
            playerChoices : []
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
            this.playerChoices.push(answer);
            console.log(`Your answer: ${answer}, correct answer: ${this.game[this.currentQuestionIndex].correct_answer}`)
            if (this.currentQuestionIndex < this.game.length) this.currentQuestionIndex++;
            else {
                //route to result screen
            }
        }
    }
}

</script>

<style>

</style>