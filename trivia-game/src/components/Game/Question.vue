<template>
    <div>
        <p>{{questionText}}</p>
        <div v-for="(answer, index) in answers" :key="index">
            <button class="btn btn-primary" @click="onAnswerClick">{{answer}}</button>
        </div>
        
    </div>
</template>

<script>

export default {
    name: 'Question',
    props: ['question'],
    computed: {
        answers() {
            return this.question?.answers;
        },
        questionText() {
            return this.question?.question;
        }
    },
    methods: {
        onAnswerClick(event) {
            let buttonElement = event.target
            let selectedAnswer = buttonElement.innerText;
            this.$emit('answer-clicked', selectedAnswer)


            // check if correct, and display if correct or not somehow
            // updateAnswers
        }
    }
}
</script>

<style>

</style>