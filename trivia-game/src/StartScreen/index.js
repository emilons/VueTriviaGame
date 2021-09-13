import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.StartScreen({

    state: {
        username: "",
        highscore: 0,
        profile: {},
        error: ""
        
    },
    mutations: {
        setProfile: (state, payload) =>{
            state.profile = payload
        },
        setUserName: (state, payload) =>{
            state.username = payload
        },
        setHighscore: (state, payload) =>{
            state.highscore = payload
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