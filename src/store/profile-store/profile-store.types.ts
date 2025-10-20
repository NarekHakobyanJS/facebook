import type { IProfile } from "../../shared/types";

interface IProfileStateType {
    profile : null | IProfile
}

interface IProfileActionsType {
    getProfile : (userId : string | undefined) => Promise<void>
}

interface IProfileStoreType extends IProfileStateType,IProfileActionsType {}

export type {IProfileStoreType,IProfileStateType, IProfileActionsType} 