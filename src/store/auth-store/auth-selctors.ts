import { useAuthStore } from ".";

export const useUserId = () => useAuthStore((state) => state.userId)