import { SocialAPI } from "..";
import type { ILoginBody } from "../../shared/types";
import type { ILoginResponseType } from "./auth-api.types";

class AuthAPI extends SocialAPI {

    async login(body : ILoginBody){
        const resposne = await this.requestConfig().post<ILoginResponseType>(`/auth/login`, body)
        
        return resposne.data
    }
}

export const authAPI = new AuthAPI()