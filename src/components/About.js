import React from 'react';
import { Link } from 'react-router-dom';
import mern from '../assets/mern.png'

const About = () => {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-2xl tracking-widest text-[#5651e5] py-2'>
                        About Me
                    </p>
                    <p className='py-2 text-gray-600'>
                        My area of expertise is developing responsive front-end applications that link to APIs and other backend technologies.There are many different ways to do a task, and I'm interested about learning new technology. Even though HTML, CSS, Javascript, and React are the technologies I am most adept at using to build front-end applications, I am a good learner and can pick up new tech stacks as needed. A great developer, in my opinion, uses the appropriate tool for the job, not just one particular language.
                    </p>
                    <p className='py-2 text-gray-600'>
                        With 1+ year of experience and a strong focus on front-end and back-end development, I'm a passionate React developer. I'm looking for a place where I can continue to develop my skills and contribute to a talented team of developers.
                    </p>
                    <Link to='/#projects'>
                        <p className='py-2 text-gray-600 underline cursor-pointer'>
                            Check out some of my latest projects.
                        </p>
                    </Link>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <img src={mern} className='rounded-xl' alt='/' />
                </div>
            </div>
        </div>
    );
};

export default About;