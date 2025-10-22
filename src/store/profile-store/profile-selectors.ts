import { useProfileStore } from ".";

export const useProfile = () => useProfileStore((state) => state.profile)