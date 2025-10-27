import type { IProfile } from "../../shared/types";

interface IProfileStateType {
    profile : null | IProfile
}

interface IProfileActionsType {
    getProfile : (userId : string | undefined) => Promise<void>
    changeProfilePhoto : (files : any) => Promise<void>
    changeProfile : (editePorfile : any) => Promise<void>
}

interface IProfileStoreType extends IProfileStateType,IProfileActionsType {}

export type {IProfileStoreType,IProfileStateType, IProfileActionsType} 