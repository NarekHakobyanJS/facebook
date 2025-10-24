import { useAuthStore } from ".";

export const useUserId = () => useAuthStore((state) => state.userId)
export const useAuthUserData = () => useAuthStore((state) => state.authUserData)
export const useAuthErrorMessage = () => useAuthStore((state) => state.authErrorMessage)

