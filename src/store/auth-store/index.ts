import { create, type StateCreator } from "zustand";
import type { IAuthStateType, IAuthStoreType } from "./auth-store.types";
import { authAPI } from "../../api/auth-api";
import { persist } from "zustand/middleware";

const initialState : IAuthStateType = {
    userId : null,
    authUserData : null,
    authErrorMessage : []
}

const authStore : StateCreator<IAuthStoreType> = ((set, get) => ({
    ...initialState,
    login : async (body) => {
        const response = await authAPI.login(body)

        if(response.resultCode === 0){
            set({userId : response.data.userId})
        }else {
            set({authErrorMessage : response.messages})
        }
    },
    authMe : async () => {
        const response = await authAPI.authMe()

        if(response.resultCode === 0){
            set({authUserData : response.data})
        }
    },
    logOut : async () => {
       const response = await authAPI.logOut() 

       set({userId : null, authUserData : null})
       useAuthStore.persist.clearStorage()
    }
}))

export const useAuthStore = create<IAuthStoreType>()(
    persist(
        authStore,
        {
            name : 'user-id',
            partialize(state) {
                return {
                    userId : state.userId,
                    authUserData : state.authUserData
                }
            },
        }
    )

)