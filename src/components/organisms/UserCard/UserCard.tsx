import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import type { IUser } from '../../../shared/types';

import userIcon from '../../../assets/user.png'

type UserCardPropsType = {
    user : IUser
}

export default function UserCard({user} : UserCardPropsType) {
  return (
    <Card sx={{ width: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="80%"
          image={user?.photos?.large ? user?.photos?.large : userIcon}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {user.name}
          </Typography>
         
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant='contained' size="small" color="primary">
          follow
        </Button>
        <Button variant='contained' size="small" color="primary">
          view profile
        </Button>
      </CardActions>
    </Card>
  );
}
