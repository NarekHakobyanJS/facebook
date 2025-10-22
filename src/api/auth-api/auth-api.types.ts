
interface ILoginResponseType {
    data : {
        userId : number,
        token : string
    },
    messages : string[],
    fieldsErrors : any[],
    resultCode : number
}

export type {ILoginResponseType}