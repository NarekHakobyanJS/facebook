interface IUser {
    name : string
    id : number
    uniqueUrlName : string | null
    photos : {
        small : null | string
        large : null | string
    },
    status : null | string
    followed : boolean
}

export type {IUser}