import React from 'react';
import AdminHome from './Admin/AdminHome';
import InstructorHome from './Instructor/InstructorHome';
import useAdmin from '../../Hooks/useAdmin';
import useInstructor from '../../Hooks/useInstructor';
import Spinner from "../../Pages/Shared/Spinner"

const DashboardHome = () => {
    const [isAdmin, isAdminLoading] = useAdmin();
    const [isInstructor, isInstructorLoading] = useInstructor();

    return (
        <div>
            {(isAdminLoading || isInstructor) && <Spinner></Spinner>}
            {isAdmin && <AdminHome></AdminHome>}
            {isInstructor && <InstructorHome></InstructorHome>}
        </div>
    );
};

export default DashboardHome;