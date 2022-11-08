import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false);
    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener('scroll', handleShadow);
    }, []);
    const handleNav = () => {
        setNav(!nav);
    };
    return (
        <div
            className={
                shadow
                    ? 'sticky top-0 z-30 w-full h-20 shadow-xl bg-[#f3f6f9]'
                    : 'sticky top-0 z-30 w-full h-20 shadow-xl '
            }>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Link to="/">

                    <p className='text-green-500 text-2xl outline outline-offset-2 outline-1 hover:outline-2 rounded p-1'>Fajla Rabby Khan</p>

                </Link>
                <div>
                    <ul className='hidden md:flex'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <a href="#home">Home</a>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <a href="#about">About</a>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <a href="#skills">Skills</a>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <a href="#projects">Projects</a>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <a href="#contact">Contact</a>
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

                                <p className='text-green-500 text-2xl outline outline-offset-2 outline-1 hover:outline-2 rounded p-1'>Fajla Rabby Khan</p>

                            </Link>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer' onClick={handleNav}>
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className='border-b border-gray-400 my-4'>
                            <p className='w-[85%] md:w-[90%] py-3'>"A smile is the universal welcome" - Max Eastman</p>

                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>

                            <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                <a href="#home">Home</a>
                            </li>
                            <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                <a href="#about">About</a>
                            </li>
                            <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                <a href="#skills">Skills</a>
                            </li>
                            <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                <a href="#projects">Projects</a>
                            </li>
                            <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                        <div className='pt-10'>
                            <p className='uppercase tracking-widest text-[#5651e5]'>Let's Connect</p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <a href='https://www.linkedin.com/in/fajla-rabby-khan/'
                                    target='_blank'
                                    rel='noreferrer'
                                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 case-in duration-500'>
                                    <FaLinkedinIn />

                                </a>
                                <a href='https://github.com/fajlarabbykhan'
                                    target='_blank'
                                    rel='noreferrer'

                                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 case-in duration-500'>
                                    <FaGithub />

                                </a>

                                <a href='#contact'
                                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 case-in duration-500'>
                                    <AiOutlineMail onClick={() => setNav(false)} />

                                </a>
                                <a href='https://drive.google.com/file/d/1VxJhbRFUjM7tK_VzaBcRcFrYledhj9_1/view?usp=sharing'
                                    target='_blank' rel='noreferrer'

                                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 case-in duration-500'>
                                    <BsFillPersonLinesFill />

                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;