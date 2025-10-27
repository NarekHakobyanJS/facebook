import type { IPhotos } from "../../shared/types"

export interface IChangeProfilePhoto {
    data : {
        photos : IPhotos
    },
    messages : string[],
    fieldsErrors: [],
    resultCode: number
}