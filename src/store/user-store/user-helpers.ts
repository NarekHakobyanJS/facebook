import { useUserStore } from ".";

export const getUsers = useUserStore.getState().getUsers
export const changePage = useUserStore.getState().changePage