import type { ILoginBody } from "../../shared/types"

interface IAuthActionType {
    login : (body : ILoginBody) => Promise<void>
    authMe : () => Promise<void>
    logOut : () => Promise<void>
}
interface IAuthStateType {
    userId : null | number,
    authUserData : null | {
        id : number,
        login : string
        email : string
    },
    authErrorMessage : string[]
}

interface IAuthStoreType extends IAuthActionType, IAuthStateType{

}


export type {IAuthActionType,IAuthStateType, IAuthStoreType}