import Vue from 'vue';
import Vuex from 'vuex';
import {getTriviaCategories} from '@/api/triviaAPI.js';
import {LoginAPI} from '@/api/LoginAPI.js';
import {ResultAPI} from '@/api/ResultAPI.js';


Vue.use(Vuex);

export default new Vuex.Store({
    //State
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

    //Mutations
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
        setDefault: (state) => {
            state.profile = [],
            state.username = "",
            state.score = 0,
            state.error = "",
            state.categories = [],
            state.difficulty = "easy",
            state.selectedCategory = {id: 9, name: "General Knowledge"},
            state.selectedQuestionAmount = 10,
            state.results = [],
            state.searchText = "",
            state.userExists = false,
            state.playerChoices = [],
            state.correctAnswers = [],
            state.questions = []
        },
        setRestart: (state) => {
            state.score = 0,
            state.playerChoices = [],
            state.correctAnswers = [],
            state.questions = [],
            state.userExists = true
        }
    },
    //Getters
    getters:{
        //Sorts based on input from the user
        searchedResults: state => {
            if(state.searchText !== "")
                return [...state.results.filter(x => x.username.includes(state.searchText))];
            return state.results
        }
    },
    //Actions
    actions: {
        //Fetches the categories
        async fetchCategories({commit}) {
            const [error, categories] = await getTriviaCategories();
            commit('setError', error);
            commit('setCategories', categories);
        },
        
        //Logins a new user with username and highscore
        //Logins new user, if name exists in the result database it updates the score instead
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
        //Updates the score of an existing user
        async updateScore({state, commit}) {
            try{
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
        // Gets all users
        async getAllUsers({commit}){
            try{
                const results = await ResultAPI.GetAllUsers()
                commit("setResults", results)
            }
            catch(e){
                commit("setError", e.message)
            }
        },
        //Fetches user based on username
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