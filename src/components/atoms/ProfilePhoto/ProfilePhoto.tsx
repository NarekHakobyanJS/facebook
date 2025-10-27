import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import UserImg from '../../../assets/user.png'
import { Button, styled } from '@mui/material';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import axios from 'axios';
import { changeProfilePhoto } from '../../../store/profile-store/profile-helpers';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});


type ProfilePhotoPropsType = {
  profilePhoto: null | string | undefined
  authUserID: boolean
}
export default function ProfilePhoto({ profilePhoto, authUserID }: ProfilePhotoPropsType) {

  const handleChangePhoto = (e : any) => {

    const files = e.target.files[0]

    changeProfilePhoto(files)

  }


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
      {
        authUserID
        &&
        <Button
          sx={{width : '100%'}}
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudDownloadIcon />}
        >
          Upload files
          <VisuallyHiddenInput
            type="file"
            onChange={handleChangePhoto}
            multiple
          />
        </Button>
      }


    </Card>
  );
}
