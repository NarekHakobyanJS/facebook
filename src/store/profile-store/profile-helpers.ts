import { useProfileStore } from ".";

export const getProfile = useProfileStore.getState().getProfile
export const changeProfilePhoto = useProfileStore.getState().changeProfilePhoto
export const changeProfile = useProfileStore.getState().changeProfile


