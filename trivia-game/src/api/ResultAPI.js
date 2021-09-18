export const ResultAPI = {

    //ASYNC AWAIT
    async GetAllUsers(){

      const apiURL = 'https://vue-questionaire.herokuapp.com'

        return await fetch(`${apiURL}/trivia`)
        .then(response => response.json())
    },

    GetUserByName(username){

        const apiURL = 'https://vue-questionaire.herokuapp.com'

        fetch(`${apiURL}/trivia?username=${username}`)
            .then(response => response.json())
        return apiURL;
            
    } 
}