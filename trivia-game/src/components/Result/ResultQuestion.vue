<template>
    <div class="rounded m-5 resultQuestions">
        <div>
            <h4>{{question}}</h4>
        </div>
        <div class="row">
            <div class="col-sm-2"></div>
            <div class="col-sm-8 row">
                <div class="col-sm-3">
                    <span>Your answer:</span>
                </div>
                <div class="col-sm-3">
                    <span>{{choice}}</span>
                </div>
                <div class="col-sm-3">
                    <span>Correct answer:</span>
                </div>
                <div class="col-sm-3">
                    <span>{{answer}}</span>
                </div>
            </div>
            <div class="col-sm-2"></div>
        </div>
    </div>
</template>

<script>
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