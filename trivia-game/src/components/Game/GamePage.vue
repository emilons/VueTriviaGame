<template>
    <div class="container rounded">
        <br>
        <h1 class="mb-4">Trivia: {{title}}</h1>
        <question id="question" :question="game[currentQuestionIndex]" @answer-clicked="handleNextQuestion"/>
        <div id="showResult" class="mb-5">
            <p>Thanks for playing the game! To see your score click the button below!</p>
            <button class="btn btn-primary mb-2"  @click="handleShowResults">Show results</button>
        </div>
        <br>
    </div>
</template>

<script>
import {mapMutations, mapState, mapActions} from 'vuex';
import {getTriviaGame} from '@/api/triviaAPI.js'
import Question from './Question.vue'

export default {
    name: 'GamePage',
    //Returns the current question index and array of the game
    data() {
        return {
            currentQuestionIndex : 0,
            game : [],
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
            this.addToQuestions(element.question);
            this.addToCorrectAnswers(element.correct_answer);
            element.answers = [element.correct_answer, ...element.incorrect_answers].sort((a, b) => {
                    return a.localeCompare(b)
                })
        });
        let showResultElement = document.getElementById("showResult");
        showResultElement.style.display="none";
    },
    //Computed the mapstate
    computed: {
        ...mapState(['difficulty', 'selectedCategory',
            'selectedQuestionAmount','error', 'profile', 
            'userExists', 'score', 'playerChoices',
            'correctAnswers', 'questions']),
        title() {
            return this.selectedCategory?.name
        }
    },
    //Methods for mapMutations and mapActions
    methods: {
        ...mapMutations(['setError', 'setScore', 'setHighScore', 'addToPlayerChoices', 'addToCorrectAnswers', 'addToQuestions']),
        ...mapActions(['updateScore', 'loginNewUser']),
        //Function for handling 
        handleNextQuestion(answer) {
            this.addToPlayerChoices(answer);
            if (answer === this.game[this.currentQuestionIndex].correct_answer) {
                this.setScore(this.score+10);
            }
            if (this.currentQuestionIndex < this.game.length-1) this.currentQuestionIndex++;
            else {
                let questionElement = document.getElementById("question");
                questionElement.style.display="none";
                let showResultElement = document.getElementById("showResult");
                showResultElement.style.display = "block";
            }
        },
        //If the user exists then this updates the score.
        //If its a new user this register the user.
        handleShowResults() {
            if (this.userExists == true) {
                this.updateScore();
            }
            else {
                this.loginNewUser();
            }
            this.$router.push("/results");
        }
    }
}

</script>

<style>

</style>
