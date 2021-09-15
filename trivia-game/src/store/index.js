import Vue from 'vue';
import Vuex from 'vuex';
import {loginAPI} from "@components/login/loginAPI"

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
        async loginUser({state, commit}) {
            try{
                const loginDetails = JSON.stringify({
                    user: {
                        username: state.username
                    }
                })

                const user = await loginAPI.register(loginDetails)

                if (user) {
                    commit("setProfile, user")

                } 
                else{
                    commit("setError", "User was not found")

                }
            }
            catch(e){
                commit("setError", e.message)

            }
        }
    }

})