import Vue from 'vue';
import Vuex from 'vuex';
import {getTriviaCategories} from '@/api/triviaAPI.js';
import LoginAPI from '@/api/LoginAPI.js';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        username: "",
        score: 0,
        profile: {},
        error: "",
        categories: [],
        difficulty: "easy",
        selectedCategory: {id: 9, name: "General Knowledge"},
        selectedQuestionAmount: 10
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

                const user = await LoginAPI.register(registerDetails)
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
        }
    }

});