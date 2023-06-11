import React from 'react';
import AdminHome from './Admin/AdminHome';
import InstructorHome from './Instructor/InstructorHome';
import useAdmin from '../../Hooks/useAdmin';
import useInstructor from '../../Hooks/useInstructor';
import Spinner from "../../Pages/Shared/Spinner"
import StudentHome from './Student/StudentHome';

const DashboardHome = () => {
    const [isAdmin, isAdminLoading] = useAdmin();
    const [isInstructor, isInstructorLoading] = useInstructor();

    return (
        <div>
            {(isAdminLoading || isInstructorLoading) && <Spinner></Spinner>}
            {isAdmin && <AdminHome></AdminHome>}
            {isInstructor && <InstructorHome></InstructorHome>}
            {!isAdmin && !isInstructor && <StudentHome></StudentHome>}
        </div>
    );
};

export default DashboardHome;