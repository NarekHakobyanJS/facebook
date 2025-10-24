import React, { useState, type FormEvent } from 'react'
import { useAuthErrorMessage, useUserId } from '../../../store/auth-store/auth-selctors'
import { Navigate } from 'react-router-dom'
import { Box, TextField, Button, Typography } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import { authMe, login } from '../../../store/auth-store/auth-helpers';


export const Login = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')


    const userId = useUserId()
    const authErrorMessage = useAuthErrorMessage()
    const handleLogin = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        login({email, password})
            .then(() => {
                authMe()
            })
    }


    if (userId) {
        return <Navigate to={`/users/profile/${userId}`} />
    }


    return (
        <Box
            onSubmit={handleLogin}
            sx={{margin : 'auto', display : 'flex', flexDirection : 'column', gap : '15px', width : '400px'}}
            component={'form'}
        >
            <TextField type='email' label='email' value={email} onChange={(e) => setEmail(e.target.value)} size='small'/>
            <TextField type='password' label='password' value={password} onChange={(e) => setPassword(e.target.value)} size='small'/>
                {
                    authErrorMessage.length 
                    ?
                    <Typography
                    color='error'
                    variant='body2'
                    >
                        {authErrorMessage[0]}
                    </Typography>
                    :
                    ''
                   
                }
            <Button type='submit' startIcon={<LoginIcon />} variant='contained'>Login</Button>
        </Box>
    )
}

