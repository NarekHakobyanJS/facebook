import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProfile } from '../../../store/profile-store/profile-selectors'
import { getProfile } from '../../../store/profile-store/profile-helpers'
import { Box } from '@mui/material'
import ProfileCard from '../../organisms/ProfileCard/ProfileCard'

const Profile = () => {
  let { id } = useParams()
  let profile = useProfile()


  useEffect(() => {
    getProfile(id)
  }, [id])

  return (
    <Box>

      <ProfileCard profile={profile}/>
    </Box>
  )
}

export default Profile