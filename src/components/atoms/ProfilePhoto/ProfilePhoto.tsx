import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import UserImg from '../../../assets/user.png'
import { Button, styled } from '@mui/material';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import axios from 'axios';

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
    ///// VAT CODE 
    console.dir(e.target.files[0])

    const files = e.target.files[0]

    const formData = new FormData()

    formData.append('file', files)
   
    axios.put(
      'https://social-network.samuraijs.com/api/1.0/profile/photo',
      formData,
      {
        withCredentials : true,
        headers : {
          'api-key' : 'c7542f6d-7c8e-476b-99bd-73721e6242b4'
        }
      }
    )
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
