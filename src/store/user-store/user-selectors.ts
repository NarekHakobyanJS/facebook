import { useUserStore } from ".";

export const useUsers = () => useUserStore((state) => state.users)