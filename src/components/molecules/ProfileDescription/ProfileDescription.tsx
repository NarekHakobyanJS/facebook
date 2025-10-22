import { Box } from '@mui/material'

import { ProfileName } from '../../atoms/ProfileName/ProfileName'
import type { IProfile } from '../../../shared/types'
import ProfilePhoto from '../../atoms/ProfilePhoto/ProfilePhoto'
import { ProfileInfo } from '../../atoms/ProfileInfo/ProfileInfo'


type ProfileDescriptionPropsType = {
    profile : IProfile | null
}

export const ProfileDescription = ({profile} : ProfileDescriptionPropsType) => {
  return (
    <Box>

        <ProfileName profileName={profile?.fullName}/>
        <Box 
        sx={{
          display : 'flex',
          justifyContent : 'space-between',
          alignItems : 'center',
          gap : '20px'
        }}
        >
            <ProfilePhoto profilePhoto={profile?.photos?.large}/>
            <ProfileInfo profile={profile}/>
        </Box>
    </Box>
  )
}
