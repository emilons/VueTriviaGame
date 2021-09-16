import Vue from 'vue';
import Vuex from 'vuex';
import {getTriviaCategories} from '@/api/triviaAPI.js';
import {LoginAPI} from '@/api/LoginAPI.js';

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
        listOfNames: []
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
        setListOfNames: (state, payload) => {
            state.listOfNames = payload
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
                console.log(user)
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
        // async GetUserByName({state, commit}) {
        //     try{
        //         const displayNameID = {
        //             username: state.username,
        //             score: state.score
        //         }
        //         const thedisp = await LoginAPI.GetUserByName(displayNameID);
        //         if(thedisp){
        //             commit("setListOfNames", thedisp)
        //         }
        //         else{
        //             commit("setError", "Cant show the user")
        //         }
        //     }
        //     catch(e){
        //         commit("setError", e.message)

        //     }
        // }
    }

});