import axios from "axios";


class SocialAPI {
    #baseURL : string = 'https://social-network.samuraijs.com/api/1.0'
    constructor(){

    }

    protected requestConfig(){
        return axios.create({
            baseURL : this.#baseURL, 
            withCredentials : true,
            headers : {
                'api-key' : '97b016cf-738c-412b-8c5c-fe131956f90e'
              }
        })
    }
}

export {SocialAPI}
