import React from 'react';
import SliderSection from './SliderSection';
import PopularClasses from './PopularClasses';
import PopularInstructor from './PopularInstructor';
import Benefits from './Benefits';

const Home = () => {
    return (
        <div className='space-y-14'>
            <SliderSection/>
            <Benefits></Benefits>
            <PopularClasses></PopularClasses>
            <PopularInstructor></PopularInstructor>
        </div>
    );
};

export default Home;