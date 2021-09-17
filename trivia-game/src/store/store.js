import Vue from 'vue';
import Vuex from 'vuex';
import {getTriviaCategories} from '@/api/triviaAPI.js';
import {LoginAPI} from '@/api/LoginAPI.js';
import {ResultAPI} from '@/api/ResultAPI.js';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        username: "w",
        score: 20,
        profile: {},
        error: "",
        categories: [],
        difficulty: "easy",
        selectedCategory: {id: 9, name: "General Knowledge"},
        selectedQuestionAmount: 10,
        results: [],
        searchText: "",
    },
    mutations: {
        setProfile: (state, payload) =>{
            state.profile = payload
        },
        setUsername: (state, payload) =>{
            state.username = payload
        },
        setHighscore: (state, payload) =>{
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
        }
        ,
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

                const newHighScore = {
                    highScore: state.score
                }
                const theScore = await LoginAPI.updateHighScore(newHighScore);
                if(theScore){
                    commit("setHighscore", theScore)
                }
                else{
                    commit("setError", "Cant update Score")
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
        
    }

});