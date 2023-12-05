import React from 'react';
import SliderSection from './SliderSection';
import PopularClasses from './PopularClasses';
import PopularInstructor from './PopularInstructor';
import Benefits from './Benefits';
import Food from './Food';
import Stats from './Stats';

const Home = () => {

    return (
        <div className='space-y-14'>
            <SliderSection/>
            <Benefits></Benefits>
            <Stats/>
            <PopularClasses></PopularClasses>
            <PopularInstructor></PopularInstructor>
            <Food></Food>
        </div>
    );
};

export default Home;