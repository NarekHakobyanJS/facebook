import { create, type StateCreator } from "zustand";
import { usersAPI } from "../../api/users-api";
import type { IUserStateType, IUserStoreType } from "./user-store.types";


const initialState : IUserStateType = {
    users : []
}

//Variable
const userStore : StateCreator<IUserStoreType> = ((set, get) => ({
    ...initialState,
    getUsers : async () => {
        const response = await usersAPI.getUsers()
        set({users : response.items})
    }
}))

export const useUserStore = create<IUserStoreType>()(userStore)