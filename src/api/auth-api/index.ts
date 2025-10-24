import { SocialAPI } from "..";
import type { ILoginBody } from "../../shared/types";
import type { IAuthMeResponseType, ILoginResponseType } from "./auth-api.types";

class AuthAPI extends SocialAPI {

    async login(body : ILoginBody){
        const response = await this.requestConfig().post<ILoginResponseType>(`/auth/login`, body)
        
        return response.data
    }

    async authMe(){
        const response = await this.requestConfig().get<IAuthMeResponseType>('/auth/me')

        return response.data
    }

    async logOut(){
        const response = await this.requestConfig().delete('/auth/login')

        return response.data
    }
}

export const authAPI = new AuthAPI()