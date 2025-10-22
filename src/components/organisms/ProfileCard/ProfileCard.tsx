import { Box } from '@mui/material'
import { ProfileDescription } from '../../molecules/ProfileDescription/ProfileDescription'
import type { IProfile } from '../../../shared/types'

type ProfileCardPropsType = {
    profile : IProfile | null
}
const ProfileCard = ({profile} : any) => {
  return (
    <Box>
        <ProfileDescription profile={profile}/>
    </Box>
  )
}

export default ProfileCard