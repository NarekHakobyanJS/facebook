import { createBrowserRouter } from "react-router-dom";
import Layout from "../../components/templates/Layout/Layout";
import { Users, Home, Profile } from "../../components/pages";


export const router = createBrowserRouter([
    {
        path : '/',
        element : <Layout />,
        children : [
            {
                index : true,
                element : <Home />
            },
            {
                path : "/users",
                element : <Users />
            },
            {
                path : '/users/profile/:id',
                element : <Profile />
            }
        ]
    }
])