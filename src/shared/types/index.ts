export interface IPhotos {
    small : null | string
    large : null | string
}

interface IUser {
    name : string
    id : number
    uniqueUrlName : string | null
    photos : IPhotos,
    status : null | string
    followed : boolean
}

interface IProfile {
    aboutMe : null | string
    contacts : {
        facebook : null | string
        website : null | string
        vk : null | string
        twitter : null | string
        instagram : null | string
        youtube : null | string
        github : null | string
        mainLink :null | string
    }, 
    lookingForAJob : boolean
    lookingForAJobDescription : null | string
    fullName : string
    userId : number,
    photos :IPhotos
}

interface ILoginBody {
    email : string,
    password : string
}

export interface IEditeProfile {
    userId : number | null | undefined
    aboutMe: string | null | undefined
    fullName: string | null | undefined
    lookingForAJob: boolean | undefined
    lookingForAJobDescription: string | null | undefined
}

export type {IUser, IProfile, ILoginBody}