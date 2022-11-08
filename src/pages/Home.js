import React from 'react';
import Banner from '../components/Banner';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
        </div>
    );
};

export default Home;