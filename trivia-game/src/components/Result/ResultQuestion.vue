<template>
    <div class="rounded m-5 resultQuestions" :class="{'resultCorrect': (choice === answer)}">
        <div>
            <h4>{{decodeURIComponent(question)}}</h4>
        </div>
        <div class="row">
            <div class="col-sm-6 row">
                <div class="col-sm-6">
                    <span class="bold">Your answer:</span>
                </div>
                <div class="col-sm-6">
                    <span>{{decodeURIComponent(choice)}}</span>
                </div>

            </div>
            <div class="col-sm-6 row">
                <div class="col-sm-6">
                    <span class="bold">Correct answer:</span>
                </div>
                <div class="col-sm-6">
                    <span>{{decodeURIComponent(answer)}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//    <div class="rounded m-5 resultQuestions" :class="{'resultCorrect': (choice === answer)}>
import {mapState} from 'vuex';
export default {
    name: 'ResultQuestion',
    props: ['index'],
    computed: {
        ...mapState(['questions', 'correctAnswers', 'playerChoices']),
        answer() {
            return this.correctAnswers[this.index];
        },
        question() {
            return this.questions[this.index];
        },
        choice() {
            return this.playerChoices[this.index];
        }
    },
    methods: {

    }
}
</script>

<style>

</style>