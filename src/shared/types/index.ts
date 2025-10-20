interface IPhotos {
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


export type {IUser, IProfile}