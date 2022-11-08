import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
const Banner = () => {
    return (
        <div id='home' className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-600'>
                        "Sometimes life hits you in the head with a brick. Don’t lose faith." – Steve Jobs
                    </p>
                    <h1 className='py-4 text-gray-700'>
                        Hello, I&#39;m <span className='text-[#5651e5]'> Fajla Rabby Khan</span>
                    </h1>
                    <h1 className='py-2 text-gray-700'>A MERN Stack Developer</h1>
                    <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
                        I’m focused on building responsive front-end web applications
                        integrating back-end technologies.
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <a
                            href='https://www.linkedin.com/in/fajla-rabby-khan/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaLinkedinIn />
                            </div>
                        </a>
                        <a
                            href='https://github.com/fajlarabbykhan'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaGithub />
                            </div>
                        </a>
                        <a href='#contact'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <AiOutlineMail />
                            </div>
                        </a>

                        <a href='https://drive.google.com/file/d/1VxJhbRFUjM7tK_VzaBcRcFrYledhj9_1/view?usp=sharing'
                            target='_blank' rel='noreferrer'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <BsFillPersonLinesFill />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;