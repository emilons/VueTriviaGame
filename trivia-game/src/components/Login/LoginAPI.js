//import { get } from "core-js/core/dict"

export const LoginAPI = {


     /* getSpecificUser(){
        const apiURL = 'https://git.heroku.com/vue-questionaire.git'
        const username = 'mega-mind'

        fetch(`${apiURL}/trivia?username=${username}`)
        .then(response => response.json())
        .then(results => {
            // results will be an array of users that match the username of mega-mind.
        })
        .catch(error => {
        })
    }, */

    register(username){

        const apiURL = 'https://git.heroku.com/vue-questionaire.git'
        const apiKey = 'EdvardsAPIKEY'

        fetch(`${apiURL}/trivia`, {
                method: 'POST',
                headers: {
                    'X-API-Key': apiKey,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    username: username,
                    score: 0 
                })
            })
            .then(response => {
            if (!response.ok) {
                throw new Error('Could not create new user')
            }
            return response.json()
            })
            .then(newUser => {
            // newUser is the new user with an id
            })
            .catch(error => {
        })

    },
    /* updateHighScore(highScore){
        const apiURL = 'https://git.heroku.com/vue-questionaire.git'
        const apiKey = 'EdvardsAPIKEY'
        const userId = 1 // Update user with id 1

        fetch(`${apiURL}/trivia/${userId}`, {
                method: 'PATCH', // NB: Set method to PATCH
                headers: {
                    'X-API-Key': apiKey,
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    // Provide new highScore to add to user with id 1
                    highScore: 100  
                })
            })
            .then(response => {
            if (!response.ok) {
                throw new Error('Could not update high score')
            }
            return response.json()
            })
            .then(updatedUser => {
            // updatedUser is the user with the Patched data
            })
            .catch(error => {
            })
    },

    GetUserByName(userName){
        const apiURL = 'https://git.heroku.com/vue-questionaire.git'
        //const username = 'mega-mind'

        fetch(`${apiURL}/trivia?username=${userName}`)
            .then(response => response.json())
            .then(results => {
                // results will be an array of users that match the username of mega-mind.
            })
            .catch(error => {
            }) 
    } */
}