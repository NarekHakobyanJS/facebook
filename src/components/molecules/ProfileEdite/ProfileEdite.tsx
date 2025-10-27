import React, { useState, type Dispatch, type FormEvent, type SetStateAction } from 'react'
import type { IEditeProfile, IProfile } from '../../../shared/types'
import { Box, Button, TextField, Checkbox } from '@mui/material'
import { changeProfile } from '../../../store/profile-store/profile-helpers'




type ProfileEditePropsType = {
    profile: IProfile | null
    setIsEditeProfile : Dispatch<SetStateAction<boolean>>
}
export const ProfileEdite = ({ profile , setIsEditeProfile}: ProfileEditePropsType) => {
    const [aboutMe, setAboutMe] = useState(profile?.aboutMe)
    const [fullName, setFullName] = useState(profile?.fullName)
    const [lookingForAJob, setLookingForAJob] = useState(profile?.lookingForAJob)
    const [jobDescription, setJobDescription] = useState(profile?.lookingForAJobDescription)


    const handleProfileChange = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const editePorfile : IEditeProfile = {
            userId : profile?.userId,
            aboutMe, 
            fullName, 
            lookingForAJob,
            lookingForAJobDescription : jobDescription
        }

        
        changeProfile(editePorfile)

        setIsEditeProfile(false)



    }

    return (
        <Box
            component={'form'}
            onSubmit={handleProfileChange}
        >
            <TextField label='about Me' size='small' value={aboutMe} onChange={(e) => setAboutMe(e.target.value)} />
            <TextField label='full Name' size='small' value={fullName} onChange={(e) => setFullName(e.target.value)} />
            <TextField
                disabled={!lookingForAJob}
                label='job Description' size='small' value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} />
            <Checkbox checked={lookingForAJob} onChange={(e) => setLookingForAJob(e.target.checked)} />
            <Button variant='contained' type='submit'>Edite Profile Info</Button>
        </Box>
    )
}
