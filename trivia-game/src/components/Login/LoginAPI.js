import { get } from "core-js/core/dict"

export const LoginAPI = {
    
    register(username){

        const apiURL = 'your-api-url-goes-here'
        const apiKey = 'your-public-api-key-goes-here'

    fetch(`${apiURL}/trivia`, {
            method: 'POST',
            headers: {
                'X-API-Key': apiKey,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                username: 'the-trivia-master', 
                highScore: 0 
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
    updateHighScore(highScore){
        const apiURL = 'your-api-url-goes-here'
        const apiKey = 'your-public-api-key-goes-here'
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

    GetUserByName(username){
        const apiURL = 'your-api-url-goes-here'
        const username = 'mega-mind'

    fetch(`${apiURL}/trivia?username=${username}`)
        .then(response => response.json())
        .then(results => {
            // results will be an array of users that match the username of mega-mind.
        })
        .catch(error => {
        })
    }
}