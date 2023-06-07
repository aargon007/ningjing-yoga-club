import React from 'react';
import NavBar from '../Pages/Shared/NavBar';
import SliderSection from '../Pages/Home/SliderSection';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='md:px-28 px-5 space-y-10'>
            <NavBar/>
            <Outlet/>
        </div>
    );
};

export default Main;