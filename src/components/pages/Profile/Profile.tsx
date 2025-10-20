import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { profileAPI } from '../../../api/profile-api'
import { useProfile } from '../../../store/profile-store'

const Profile = () => {
    let {id} = useParams()
    let {profile, 
      getProfile
      } = useProfile()


      console.log(profile);
      
    
    useEffect(() => {
      getProfile(id)
    }, [id])
    
  return (
    <div>Profile</div>
  )
}

export default Profile