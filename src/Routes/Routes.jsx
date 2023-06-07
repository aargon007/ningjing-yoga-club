import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import ErrorPage from '../Pages/Shared/ErrorPage';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Shared/Login/Login';
import Register from '../Pages/Shared/Register/Register';

const router = createBrowserRouter([
    {
        path : '/',
        element : <Main/>,
        errorElement : <ErrorPage/>,
        children : [
            {
                path : '/',
                element : <Home/>
            },
            {
                path : 'login',
                element : <Login/>
            },
            {
                path : "/register",
                element : <Register/>
            }
        ]
    }
])

export default router;