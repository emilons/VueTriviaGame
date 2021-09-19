import Vue from 'vue';
import Vuex from 'vuex';
import {getTriviaCategories} from '@/api/triviaAPI.js';
import {LoginAPI} from '@/api/LoginAPI.js';
import {ResultAPI} from '@/api/ResultAPI.js';


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        profile: [],
        username: "",
        score: 0,
        error: "",
        categories: [],
        difficulty: "easy",
        selectedCategory: {id: 9, name: "General Knowledge"},
        selectedQuestionAmount: 10,
        results: [],
        searchText: "",
        userExists: false,
        playerChoices: [],
        correctAnswers: [],
        questions: [],
    },
    mutations: {
        setProfile: (state, payload) =>{
            state.profile = payload
        },
        setHighScore: (state, payload) => {
            state.profile.highScore = payload;
        },
        setUsername: (state, payload) =>{
            state.username = payload
        },
        setScore: (state, payload) =>{
            state.score = payload
        },
        setError: (state, payload) =>{
            state.error = payload
        },
        setCategories: (state, payload) => {
            state.categories = payload
        },
        setDifficulty: (state, payload) => {
            state.difficulty = payload
        },
        setSelectedCategory: (state, payload) => {
            state.selectedCategory = payload
        },
        setSelectedQuestionAmount: (state, payload) => {
            state.selectedQuestionAmount = payload
        },
        setResults: (state, payload) => {
            state.results = payload
        },
        setSearchText: (state, payload) => {
            state.searchText = payload
        },
        setUserExists: (state, payload) =>{
            state.userExists = payload
        },
        setPlayerChoices: (state, payload) => {
            state.playerChoices = payload
        },
        addToPlayerChoices: (state, payload) => {
            state.playerChoices.push(payload)
        },
        setCorrectAnswers: (state, payload) => {
            state.correctAnswers = payload
        },
        addToCorrectAnswers: (state, payload) => {
            state.correctAnswers.push(payload)
        },
        setQuestions: (state, payload) => {
            state.questions = payload
        },
        addToQuestions: (state, payload) => {
            state.questions.push(payload)
        },
    },
    getters:{
        searchedResults: state => {
            if(state.searchText !== "")
                return [...state.results.filter(x => x.username.includes(state.searchText))];
            return state.results
        }
    },
    actions: {
        async fetchCategories({commit}) {
            const [error, categories] = await getTriviaCategories();
            commit('setError', error);
            commit('setCategories', categories);
        },

        async loginNewUser({state, commit}) {
            try{
                const registerDetails = {
                    username: state.username,
                    highScore: state.score
                }
                const user = await LoginAPI.register(registerDetails);
                if (user) {
                   commit("setProfile", user)
                }
                else{
                    commit("setError", "The username is not accepted")
                }
            }
            catch(e){
                commit("setError", e.message)
             }
        },

        async updateScore({state, commit}) {
            try{
                await LoginAPI.updateHighScore(55, 5)
                
                if (state.profile.highScore < state.score) {
                    await LoginAPI.updateHighScore(state.score, state.profile.id);
                    this.setHighScore(this.score);
                }
                else{
                    await LoginAPI.updateHighScore(state.profile.highScore, state.profile.id)
                }
            }
            catch(e){
                commit("setError", e.message)

            }
        },

        async getAllUsers({commit}){
            try{
                const results = await ResultAPI.GetAllUsers()
                commit("setResults", results)
            }
            catch(e){
                commit("setError", e.message)
            }
        },

        async fetchSpecificUser({commit, state}) {
            try{
                const [profile] = await LoginAPI.getSpecificUser(state.username)

                if(profile !== undefined){
                    commit("setProfile", profile)
                    commit("setUserExists", true)
                }
            }
            catch(e){
                commit("setError", e.message)
            }
        },
    }
});