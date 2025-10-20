import { useUserStore } from ".";

export const useUsers = () => useUserStore((state) => state.users)
export const useTotalCount = () => useUserStore((state) => state.totalCount)
export const usePage = () => useUserStore((state) => state.page)


