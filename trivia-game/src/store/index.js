import Vue from 'vue';
import Vuex from 'vuex';
import {LoginAPI} from "@/components/Login/LoginAPI"

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
        setHighScore: (state, payload) =>{
            state.score = payload
        },
        setError: (state, payload) =>{
            state.error = payload
        }
    },
    getters: {

    },

    actions: {

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

})