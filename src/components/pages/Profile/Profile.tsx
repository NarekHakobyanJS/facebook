import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProfile } from '../../../store/profile-store/profile-selectors'
import { getProfile } from '../../../store/profile-store/profile-helpers'
import { Box } from '@mui/material'
import ProfileCard from '../../organisms/ProfileCard/ProfileCard'
import { useUserId } from '../../../store/auth-store/auth-selctors'

const Profile = () => {
  let { id } = useParams()
  let profile = useProfile()


  const userId = useUserId()

  const authUserID = userId === Number(id)
  useEffect(() => {
    getProfile(id)
  }, [id])

  return (
    <Box>

      <ProfileCard profile={profile} authUserID={authUserID}/>
    </Box>
  )
}

export default Profile