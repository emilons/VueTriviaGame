<template>
    <div class="container">
        <h1>Lets play a game</h1>
        <Question :question="game[currentQuestionIndex]" @answer-clicked="handleNextQuestion"/>
        <button class="btn btn-primary" id="showResultButton" @click="handleShowResults">Show results</button>
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
        let buttonElement = document.getElementById("showResultButton");
        buttonElement.style.display="none";
    },
    computed: {
        ...mapState(['difficulty', 'selectedCategory', 'selectedQuestionAmount','error', 'profile', 'userExists', 'score']),
    },
    methods: {
        ...mapMutations(['setError', 'setScore', 'updateScore', 'loginNewUser']),
        handleNextQuestion(answer) {
            this.playerChoices.push(answer);

            if (answer === this.game[this.currentQuestionIndex].correct_answer) {
                this.setScore(this.score+10);
            }
            console.log(`Your answer: ${answer}, correct answer: ${this.game[this.currentQuestionIndex].correct_answer}`)
            console.log(this.score)
            if (this.currentQuestionIndex < this.game.length-1) this.currentQuestionIndex++;
            else {
                let buttonElement = document.getElementById("showResultButton");
                buttonElement.style.display = "block";
                // console.log("SHOWING RESULTS");
                // console.log(this.playerChoices) // move playerchoices array to store (vuex) and use setPlayerChoices here
                // //this.$router.push("/results");
            }
        },
        handleShowResults() {
            // login things
            // update state.score
            if (this.userExists == true) {
                // if profile.highscore <= state.score
                //this.updateScore();¨
                console.log(`updated score to ${this.score}`)
            }
            else {
                //this.loginNewUser();
                console.log(`added user with score ${this.score}`)
            }
            //this.$router.push("/results");
        }
    }
}

</script>

<style>

</style>
