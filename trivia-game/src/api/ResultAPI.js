// Helper function to clean weird sorting problem where 
// username: dewaldes and gingerbread were always first despite sorting
function cleanFetchResult(result) {
    const element0 = result[0]
    const element1 = result[1]
    result.splice(0,2)
    result.splice(result.length, 0, element0)
    result.splice(result.length, 0, element1)
    return result;
}

// Helper function to sort list of usernames and scores by descending highScore
function sortScores(scoreList) {
    return scoreList.sort((a,b) => parseInt(b.highScore) - parseInt(a.highScore));
}

export const ResultAPI = {

    //Get all users in the database
    async GetAllUsers(){

        const apiURL = 'https://vue-questionaire.herokuapp.com'

        return await fetch(`${apiURL}/trivia`)
            .then(response => response.json())
            .then(result => cleanFetchResult(result)).then(result => sortScores(result))
    },

    //Get specific user based on the name
    async GetUserByName(username){

        const apiURL = 'https://vue-questionaire.herokuapp.com'

        await fetch(`${apiURL}/trivia?username=${username}`)
            .then(response => response.json())
        return apiURL;
    } 
}