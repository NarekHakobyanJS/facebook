import { Box } from '@mui/material'

import { ProfileName } from '../../atoms/ProfileName/ProfileName'
import type { IProfile } from '../../../shared/types'
import ProfilePhoto from '../../atoms/ProfilePhoto/ProfilePhoto'


type ProfileDescriptionPropsType = {
    profile : IProfile | null
}

export const ProfileDescription = ({profile} : ProfileDescriptionPropsType) => {
  return (
    <Box>

        <ProfileName profileName={profile?.fullName}/>
        <Box>
            <ProfilePhoto profilePhoto={profile?.photos?.large}/>
        </Box>
    </Box>
  )
}
