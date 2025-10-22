import { create, type StateCreator } from "zustand";
import type { IAuthStateType, IAuthStoreType } from "./auth-store.types";
import { authAPI } from "../../api/auth-api";
import { persist } from "zustand/middleware";

const initialState : IAuthStateType = {
    userId : null
}

const authStore : StateCreator<IAuthStoreType> = ((set, get) => ({
    ...initialState,
    login : async (body) => {
        const response = await authAPI.login(body)
        set({userId : response.data.userId})
    }
}))

export const useAuthStore = create<IAuthStoreType>()(
    persist(
        authStore,
        {
            name : 'user-id',
            partialize(state) {
                return {userId : state.userId}
            },
        }
    )

)