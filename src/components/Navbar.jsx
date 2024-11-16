import React from 'react';
import profile from "../assets/user.png"

const Navbar = () => {
    return (
        <div className='grid grid-cols-3 py-4 items-center'>
            <div></div>
            <div className='flex justify-center list-none gap-4'>
                <li className='text-[#706F6F]'>Home</li>
                <li className='text-[#706F6F]'>About</li>
                <li className='text-[#706F6F]'>Career</li>
            </div>
            <div className='flex gap-3 items-center justify-end'>
                <img src={profile} alt="" />
                <h1 className='font-semibold text-white bg-[#706F6F] py-2 px-6'>Login</h1>
            </div>
        </div>
    );
};

export default Navbar;