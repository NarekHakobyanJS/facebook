import type { IUser } from "../../shared/types";

interface IUserStateType {
    users : IUser[]
    totalCount : number
    page : number
}

interface IUserAtionsType {
    getUsers : () => Promise<void>,
    changePage : (newPage : number) => void
}

interface IUserStoreType extends IUserStateType, IUserAtionsType {}

export type {IUserStoreType, IUserStateType, IUserAtionsType}