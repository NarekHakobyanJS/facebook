import { Typography } from '@mui/material'
import React from 'react'

type ProfileNamePropsType = {
    profileName : string | null | undefined
}

export const ProfileName = ({profileName} : ProfileNamePropsType) => {
  return (
    <Typography
        variant='h3'
        align='center'
    >
        {profileName}
    </Typography>
  )
}
