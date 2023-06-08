import React from 'react';
import useAuth from '../Hooks/useAuth';
import useInstructor from '../Hooks/useInstructor';
import { useLocation } from 'react-router-dom';
import Spinner from '../Pages/Shared/Spinner';

const InstructorRoute = ({children}) => {
    const { user, loading } = useAuth();
    const [isInstructor, isInstructorLoading] = useInstructor();
    const location = useLocation();

    if(loading || isInstructorLoading){
        return <Spinner></Spinner>
    }
    if (user && isInstructor) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default InstructorRoute;