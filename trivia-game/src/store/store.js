import Vue from 'vue';
import Vuex from 'vuex';
import {getTriviaCategories} from '@/api/triviaAPI.js';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        username: "",
        score: 0,
        profile: {},
        error: "",
        categories: []
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
        }
    },
    actions: {
        async fetchCategories({commit}) {
            const [error, categories] = await getTriviaCategories();
            commit('setError', error);
            commit('setCategories', categories);
        }
    }

});