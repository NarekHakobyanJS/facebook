import { SocialAPI } from "..";
import type { IGetUsersResposneType } from "./users-api.types";

class UsersAPI extends SocialAPI {
    constructor(){
        super()
    }

    async getUsers(){
        const resposne = await this.requestConfig().get<IGetUsersResposneType>('/users')

        return resposne.data
    }
}

export const usersAPI = new UsersAPI()