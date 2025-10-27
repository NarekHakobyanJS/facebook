import { create, type StateCreator } from "zustand";
import { profileAPI } from "../../api/profile-api";
import type { IProfileStoreType,IProfileStateType, IProfileActionsType } from "./profile-store.types";
import { devtools } from 'zustand/middleware'
import type { IEditeProfile } from "../../shared/types";

const initialState : IProfileStateType = {
    profile : null,
}

const profileStore : StateCreator<IProfileStoreType> = ((set) => ({
    ...initialState,
    getProfile : async (userId) => {
        const resposne = await profileAPI.getProfile(userId)
        set({profile : resposne})
    },

    changeProfilePhoto : async (files : any) => {
        const resposne = await profileAPI.changeProfilePhoto(files)

        set((state) => {
            if(!state.profile) return state

            return {
                profile : {...state.profile, photos : resposne.data.photos}
            }
        })
        
    },
    changeProfile : async (editePorfile : IEditeProfile) => {
        const response = await profileAPI.changeProfile(editePorfile)

        if(response.resultCode === 0) {
            
            const response : any = await profileAPI.getProfile(editePorfile?.userId)
            set({profile : response})
        }
    }
}))

export const useProfileStore = create<IProfileStoreType>()(
    devtools(profileStore)
   
)
