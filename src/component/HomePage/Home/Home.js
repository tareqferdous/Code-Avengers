import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Courses from '../Courses/Courses';
import Features from '../Features/Features';

const Home = () => {
    return (
        <div>            
            <Banner></Banner>
            <AboutUs/>
            <Courses/>
            <Features/>
            <Contact></Contact>            
        </div>
    );
};

export default Home;