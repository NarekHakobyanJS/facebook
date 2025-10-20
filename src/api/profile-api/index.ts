import { SocialAPI } from "..";
import type { IProfile } from "../../shared/types";

class ProfileAPI extends SocialAPI {

    async getProfile(userId : string | undefined){
        const resposne = await this.requestConfig().get<IProfile>(`/profile/${userId}`)

        return resposne.data
    }
}

export const profileAPI = new ProfileAPI()