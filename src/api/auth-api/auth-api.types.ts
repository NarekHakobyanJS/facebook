
interface ILoginResponseType {
    data : {
        userId : number,
        token : string
    },
    messages : string[],
    fieldsErrors : any[],
    resultCode : number
}


interface IAuthMeResponseType {
    data : {
        id : number,
        login : string
        email : string
    },
    messages : string[],
    fieldsErrors : any[],
    resultCode : number
}

export type {ILoginResponseType, IAuthMeResponseType}