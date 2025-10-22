import type { ILoginBody } from "../../shared/types"

interface IAuthActionType {
    login : (body : ILoginBody) => Promise<void>
}
interface IAuthStateType {
    userId : null | number
}

interface IAuthStoreType extends IAuthActionType, IAuthStateType{

}


export type {IAuthActionType,IAuthStateType, IAuthStoreType}