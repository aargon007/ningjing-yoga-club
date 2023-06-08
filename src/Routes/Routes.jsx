import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import ErrorPage from '../Pages/Shared/ErrorPage';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Shared/Login/Login';
import Register from '../Pages/Shared/Register/Register';
import Dashboard from '../Pages/Dashboard/Dashboard';
import SelectedClass from '../Pages/Dashboard/Student/SelectedClass';
import EnrolledClass from '../Pages/Dashboard/Student/EnrolledClass';
import Profile from '../Pages/Dashboard/Shared/Profile';
import AddClass from '../Pages/Dashboard/Instructor/AddClass';
import MyClasses from '../Pages/Dashboard/Instructor/MyClasses';
import ManageClasses from '../Pages/Dashboard/Admin/ManageClasses';
import ManageUsers from '../Pages/Dashboard/Admin/ManageUsers';

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
    },
    {
        path : '/dashboard',
        element : <Dashboard/>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            // student 
            {
                path : 'selected-classes',
                element : <SelectedClass></SelectedClass>
            },
            {
                path : 'enrolled-classes',
                element : <EnrolledClass></EnrolledClass>
            },
            {
                path : 'profile',
                element : <Profile></Profile>
            },
            // instructor 
            {
                path : 'add-class',
                element : <AddClass></AddClass>
            },
            {
                path : 'my-classes',
                element : <MyClasses></MyClasses>
            },
            //admin
            {
                path : 'manage-classes',
                element : <ManageClasses></ManageClasses>
            },
            {
                path : 'manage-users',
                element : <ManageUsers></ManageUsers>
            },
        ]
    }
])

export default router;