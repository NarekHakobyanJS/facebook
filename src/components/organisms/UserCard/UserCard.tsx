import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Link from '@mui/material/Link';
import type { IUser } from '../../../shared/types';

import userIcon from '../../../assets/user.png'
import { NavLink } from 'react-router-dom';

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
          <Link
          component={NavLink}
          sx={{color : 'white'}}
          to={`/users/profile/${user.id}`}
          >

          view profile
          </Link>
          
        </Button>
      </CardActions>
    </Card>
  );
}
