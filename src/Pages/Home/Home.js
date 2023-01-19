import React from 'react';
import About from '../../components/About/About';
import Community from '../../components/Community/Community';
import Features from '../../components/Features/Features';
import HeroSection from '../../components/HeroSection/HeroSection';
import Testimonial from '../../components/Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='bg-base-100'>
            <HeroSection />
            <Features />
            <About />
            <Testimonial />
            <Community />
        </div>
    );
};

export default Home;