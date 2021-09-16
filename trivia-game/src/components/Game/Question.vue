<template>
    <div>
        <p>{{question.question}}</p>
        <div v-for="(answer, index) in question.answers" :key="index">
            <button class="btn btn-primary" @click="onAnswerClick">{{answer}}</button>
        </div>
        
    </div>
</template>

<script>


export default {
    name: 'Question',
    props: ['question'],
    methods: {
        onAnswerClick() {
            //let buttonElement = document.get
            //this.answer = e.target.;
            // let selectedAnswer = buttonElement.innerText;
            // this.$emit('answer-clicked', selectedAnswer)
        }
    }
}
</script>

<style>

</style>