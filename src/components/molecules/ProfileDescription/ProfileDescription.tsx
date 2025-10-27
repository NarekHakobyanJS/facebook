import { Box, Button } from '@mui/material'

import { ProfileName } from '../../atoms/ProfileName/ProfileName'
import type { IProfile } from '../../../shared/types'
import ProfilePhoto from '../../atoms/ProfilePhoto/ProfilePhoto'
import { ProfileInfo } from '../../atoms/ProfileInfo/ProfileInfo'
import { useState } from 'react'
import { ProfileEdite } from '../ProfileEdite/ProfileEdite'


type ProfileDescriptionPropsType = {
    profile : IProfile | null
    authUserID : boolean
}

export const ProfileDescription = ({profile, authUserID} : ProfileDescriptionPropsType) => {

  const [isEditeProfile, setIsEditeProfile] = useState<boolean>(false)


  return (
    <Box>

        <ProfileName profileName={[profile?.fullName]}/>
        
        <Box 
        sx={{
          display : 'flex',
          justifyContent : 'space-between',
          alignItems : 'center',
          gap : '20px'
        }}
        >
            <ProfilePhoto authUserID={authUserID} profilePhoto={profile?.photos?.large}/>
            <Box
              sx={{
                flexGrow : 1,
                display : 'flex',
                flexDirection : 'column',
                gap : '30px',
                justifyContent : 'space-between',
              }}
            >
              {
                isEditeProfile
                ?
                <ProfileEdite 
                setIsEditeProfile={setIsEditeProfile}
                profile={profile}/>
                :
                <ProfileInfo profile={profile}/>
              }
              
              {
                authUserID && <Button 
                onClick={() => setIsEditeProfile(true)}
                sx={{width : '300px'}} variant='contained'>Edite Profile</Button>
              }
            </Box>
        </Box>
    </Box>
  )
}
