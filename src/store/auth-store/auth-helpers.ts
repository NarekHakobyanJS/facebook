import { useAuthStore } from ".";

export const login = useAuthStore.getState().login
export const authMe = useAuthStore.getState().authMe
