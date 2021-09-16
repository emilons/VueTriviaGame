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

    register(user){
        console.log(user)
        const apiURL = 'https://vue-questionaire.herokuapp.com' //SET FROM .ENV INSTEAD
        const apiKey = 'EdvardsAPIKEY' //SET FROM .ENV INSTEAD

        fetch(`${apiURL}/trivia`, {
                method: 'POST',
                headers: {
                    'X-API-Key': apiKey,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
                
            }).then(response => {
            if (!response.ok) {
                throw new Error('Could not create new user')
            }
            })
        return user;
    }, 
    //  updateHighScore(user){
    //     const apiURL = 'https://vue-questionaire.herokuapp.com/'
    //     const apiKey = 'EdvardsAPIKEY'
    //     const userId = 1 // Update user with id 1

    //     fetch(`${apiURL}/trivia/${userId}`, {
    //             method: 'PATCH', // NB: Set method to PATCH
    //             headers: {
    //                 'X-API-Key': apiKey,
    //             'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({
    //                 // Provide new highScore to add to user with id 1
    //                 highScore: 100  
    //             })
    //         })
    //         .then(response => {
    //         if (!response.ok) {
    //             throw new Error('Could not update high score')
    //         }
    //         return response.json()
    //         })
    //         .then(updatedUser => {
    //         // updatedUser is the user with the Patched data
    //         })
    //         .catch(error => {
    //         })
    // },

    // GetUserByName(userName){
    //     const apiURL = 'https://git.heroku.com/vue-questionaire.git'
    //     //const username = 'mega-mind'

    //     fetch(`${apiURL}/trivia?username=${userName}`)
    //         .then(response => response.json())
    //         .then(results => {
    //             // results will be an array of users that match the username of mega-mind.
    //         })
    //         .catch(error => {
    //         }) 
    // } 
}