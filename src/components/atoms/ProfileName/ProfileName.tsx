import { Typography } from '@mui/material'
import React from 'react'

type ProfileNamePropsType = {
    profileName : (string | undefined) []
}

export const ProfileName = ({profileName} : ProfileNamePropsType) => {
  console.log("Render Profile Name");
  
  return (
    <Typography
        variant='h3'
        align='center'
    >
        {profileName[0]}
    </Typography>
  )
}
