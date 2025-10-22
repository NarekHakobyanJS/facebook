import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import UserImg from '../../../assets/user.png'

type ProfilePhotoPropsType = {
    profilePhoto : null | string | undefined
}
export default function ProfilePhoto({profilePhoto} : ProfilePhotoPropsType) {
  return (
    <Card sx={{ width: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100%"
          image={profilePhoto ? profilePhoto : UserImg}
          alt="green iguana"
        />
      </CardActionArea>
    </Card>
  );
}
