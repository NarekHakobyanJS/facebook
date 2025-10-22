import { create, type StateCreator } from "zustand";
import { profileAPI } from "../../api/profile-api";
import type { IProfileStoreType,IProfileStateType, IProfileActionsType } from "./profile-store.types";
import { devtools } from 'zustand/middleware'

const initialState : IProfileStateType = {
    profile : null,
}

const profileStore : StateCreator<IProfileStoreType> = ((set) => ({
    ...initialState,
    getProfile : async (userId) => {
        const resposne = await profileAPI.getProfile(userId)
        set({profile : resposne})
    }
}))

export const useProfileStore = create<IProfileStoreType>()(
    devtools(profileStore)
   
)
