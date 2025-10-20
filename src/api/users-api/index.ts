import { SocialAPI } from "..";
import type { IGetUsersResposneType } from "./users-api.types";

class UsersAPI extends SocialAPI {
    constructor(){
        super()
    }

    async getUsers(page : number){
        const resposne = await this.requestConfig().get<IGetUsersResposneType>(`/users?page=${page}&count=100`)

        return resposne.data
    }
}

export const usersAPI = new UsersAPI()