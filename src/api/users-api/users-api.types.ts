import type { IUser } from "../../shared/types";

interface IGetUsersResposneType {
    items : IUser[],
    totalCount : number,
    error : null
}

export type {IGetUsersResposneType}