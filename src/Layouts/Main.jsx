import React from 'react';
import NavBar from '../Pages/Shared/NavBar';
import SliderSection from '../Pages/Home/SliderSection';

const Main = () => {
    return (
        <div className='md:px-28 px-5 space-y-10'>
            <NavBar/>
            <SliderSection/>
        </div>
    );
};

export default Main;