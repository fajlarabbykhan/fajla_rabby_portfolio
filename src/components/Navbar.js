import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex w-full items-center justify-between'>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Link to="/">

                    <p className='text-green-400 text-2xl'>Fajla Rabby Khan</p>

                </Link>
                <div>
                    <ul className='hidden md:flex'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link to="/">Home</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;