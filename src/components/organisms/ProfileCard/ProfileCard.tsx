import { Box } from '@mui/material'
import { ProfileDescription } from '../../molecules/ProfileDescription/ProfileDescription'
import type { IProfile } from '../../../shared/types'

type ProfileCardPropsType = {
    profile : IProfile | null
    authUserID : boolean
}
const ProfileCard = ({profile,  authUserID} : ProfileCardPropsType) => {
  return (
    <Box>
        <ProfileDescription profile={profile} authUserID={authUserID}/>
    </Box>
  )
}

export default ProfileCard