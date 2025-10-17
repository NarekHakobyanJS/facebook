import axios from "axios";


class SocialAPI {
    #baseURL : string = 'https://social-network.samuraijs.com/api/1.0'
    constructor(){

    }

    protected requestConfig(){
        return axios.create({baseURL : this.#baseURL})
    }
}

export {SocialAPI}
