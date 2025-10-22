import { create, type StateCreator } from "zustand";
import { devtools, persist} from 'zustand/middleware'
import { usersAPI } from "../../api/users-api";
import type { IUserStateType, IUserStoreType } from "./user-store.types";


const initialState: IUserStateType = {
    users: [],
    totalCount : 0,
    page : 1
}

//Variable
const userStore: StateCreator<
    IUserStoreType,
    [ ['zustand/devtools', never], ['zustand/persist', unknown]]> = ((set, get) => ({
    ...initialState,
    getUsers: async () => {
        const {page} = get()
        
        const response = await usersAPI.getUsers(page)
        set({ users: response.items, totalCount : response.totalCount }, false, 'get/users')
    },
    changePage : (newPage) => {
        set({page : newPage})
    }
}))

export const useUserStore = create<IUserStoreType>()(
    devtools(
        persist(
            userStore,
            {
                name : 'current-page',
                partialize(state) {
                    return {page : state.page}
                },
            }
        )
    ))