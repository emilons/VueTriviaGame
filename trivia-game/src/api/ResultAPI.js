function sortScores(scoreList) {
    return scoreList.sort((a,b) => parseInt(b.highScore) - parseInt(a.highScore));
}

export const ResultAPI = {

    //Get all users in the database
    async GetAllUsers(){

      const apiURL = 'https://vue-questionaire.herokuapp.com'

        return await fetch(`${apiURL}/trivia`)
        .then(response => response.json()).then(result => {
            console.log(result)
            return result;
        }).then(result => sortScores(result))

    },

    //Get specific user based on the name
    async GetUserByName(username){

        const apiURL = 'https://vue-questionaire.herokuapp.com'

        await fetch(`${apiURL}/trivia?username=${username}`)
            .then(response => response.json())
        return apiURL;
    } 
}