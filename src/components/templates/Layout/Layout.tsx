
import { Outlet } from 'react-router-dom'
import {Header} from '../../organisms/Header/Header'
import { Container } from '@mui/material'

const Layout = () => {
  return (
    <>
        <Header />
        <Container maxWidth='xl'>
          <Outlet />
        </Container>
    </>
  )
}

export default Layout