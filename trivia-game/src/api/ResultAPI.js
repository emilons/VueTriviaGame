export const ResultAPI = {

    GetAllUsers(){
        const apiURL = 'https://vue-questionaire.herokuapp.com'
        return fetch(`${apiURL}/trivia`)
        .then(response => response.json())
    },



    GetUserByName(username){
        const apiURL = 'https://vue-questionaire.herokuapp.com'
        //const username = 'mega-mind'

        fetch(`${apiURL}/trivia?username=${username}`)
            .then(response => response.json())
        return apiURL;
            
    } 
}