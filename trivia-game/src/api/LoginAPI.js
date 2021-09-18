export const LoginAPI = {


    // Fetches specific user based on the name in the database
    getSpecificUser(username){
        const apiURL = 'https://vue-questionaire.herokuapp.com'
        return fetch(`${apiURL}/trivia?username=${username}`)
        .then(response => response.json())
    },

    // Posts a new user in the database takes inn the user
    register(user){
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
    
    // Patches a new score to allreade existing users in the database, takes inn the score and userID
    updateHighScore(score, userId){
        const apiURL = 'https://vue-questionaire.herokuapp.com'
        const apiKey = 'EdvardsAPIKEY'
        fetch(`${apiURL}/trivia/${userId}`, {
                method: 'PATCH', // NB: Set method to PATCH
                headers: {
                    'X-API-Key': apiKey,
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "highScore": score
                })
            })
            .then(response => {
            if (!response.ok) {
                throw new Error('Could not update high score')
            }
        })
    },
}