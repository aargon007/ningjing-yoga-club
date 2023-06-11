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
import PrivateRoute from './PrivateRoute';
import AdminRoute from './AdminRoute';
import InstructorRoute from './InstructorRoute';
import DashboardHome from '../Pages/Dashboard/DashboardHome';
import PublicClasses from '../Pages/Classes/PublicClasses';
import Instructors from '../Pages/AllInstructor/Instructors';

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
            },
            {
                path : '/classes',
                element : <PublicClasses></PublicClasses>
            },
            {
                path : "instructors",
                element : <Instructors></Instructors>
            }
        ]
    },
    {
        path : '/dashboard',
        element : <PrivateRoute><Dashboard/></PrivateRoute>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
                path : '/dashboard',
                element : <DashboardHome></DashboardHome>
            },
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
                element : <InstructorRoute><AddClass></AddClass></InstructorRoute>
            },
            {
                path : 'my-classes',
                element : <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
            },
            //admin
            {
                path : 'manage-classes',
                element : <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
            },
            {
                path : 'manage-users',
                element : <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            },
        ]
    }
])

export default router;