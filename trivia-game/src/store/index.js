import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        username: "",
        score: 0,
        profile: {},
        error: "",

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
        }
    },
    getters: {

    },
    actions: {
        
    }

})