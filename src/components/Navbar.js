import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav);
    };
    return (
        <div className='sticky top-0 z-30 w-full h-20 shadow-xl bg-[#f3f6f9]'>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Link to="/">

                    <p className='text-green-500 text-2xl'>Fajla Rabby Khan</p>

                </Link>
                <div>
                    <ul className='hidden md:flex'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link to="/">Home</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link to="/about">About</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link to="/skills">Skills</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link to="/contact">Contact</Link>
                        </li>

                    </ul>
                    <div className='md:hidden' onClick={handleNav}>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>

            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div
                    className={
                        nav
                            ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                    }>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Link to="/">

                                <p className='text-green-500 text-2xl '>Fajla Rabby Khan</p>

                            </Link>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer' onClick={handleNav}>
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className='border-b border-gray-400 my-4'>
                            <p className='w-[85%] md:w-[90%] py-3'>A smile is the universal welcome</p>

                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            <li className='py-4 text-sm'>
                                <Link to="/">Home</Link>
                            </li>
                            <li className='py-4 text-sm'>
                                <Link to="/about">About</Link>
                            </li>
                            <li className='py-4 text-sm'>
                                <Link to="/skills">Skills</Link>
                            </li>
                            <li className='py-4 text-sm'>
                                <Link to="/projects">Projects</Link>
                            </li>
                            <li className='py-4 text-sm'>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <div className='pt-10'>
                            <p className='uppercase tracking-widest text-[#5651e5]'>Let's Connect</p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 case-in duration-500'>
                                    <FaLinkedinIn />

                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 case-in duration-500'>
                                    <FaGithub />

                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 case-in duration-500'>
                                    <BsFillPersonLinesFill />

                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 case-in duration-500'>
                                    <AiOutlineMail />

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;