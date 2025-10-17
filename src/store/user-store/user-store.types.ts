import type { IUser } from "../../shared/types";

interface IUserStateType {
    users : IUser[]
}

interface IUserAtionsType {
    getUsers : () => Promise<void>
}

interface IUserStoreType extends IUserStateType, IUserAtionsType {}

export type {IUserStoreType, IUserStateType, IUserAtionsType}