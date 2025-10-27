import { SocialAPI } from "..";
import type { IEditeProfile, IProfile } from "../../shared/types";
import type { IChangeProfilePhoto } from "./profile-api.types";

class ProfileAPI extends SocialAPI {

    async getProfile(userId : string | undefined | null | number){
        const resposne = await this.requestConfig().get<IProfile>(`/profile/${userId}`)

        return resposne.data
    }

    async changeProfilePhoto(files : any){
        const formData = new FormData()

        formData.append('file', files)
   
        const response = await this.requestConfig().put<IChangeProfilePhoto>('/profile/photo', formData)

        return response.data
    }

    async changeProfile(editePorfile : IEditeProfile){
        // /profile

        const response = await this.requestConfig().put('/profile', editePorfile)

        return response.data
    }
    
}

export const profileAPI = new ProfileAPI()