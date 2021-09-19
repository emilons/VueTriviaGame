<template>
    <div>
        <p class="rounded" id="questionText">{{questionText}}</p>
        <div class="row">
            <div class="col-sm-4"></div>
            <div class="col-sm-4">
                <div class="" v-for="(answer, index) in answers" :key="index">
                    <button class="btn btn-primary w-100 mb-4" @click="onAnswerClick">{{answer}}</button>
                </div>
            </div>
            <div class="col-sm-4"></div>
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
        }
    }
}
</script>

<style>

</style>