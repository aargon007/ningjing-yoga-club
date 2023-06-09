import React from 'react';
import AdminHome from './Admin/AdminHome';
import InstructorHome from './Instructor/InstructorHome';

const DashboardHome = () => {
    return (
        <div>
            {/* <AdminHome></AdminHome> */}
            <InstructorHome></InstructorHome>
        </div>
    );
};

export default DashboardHome;