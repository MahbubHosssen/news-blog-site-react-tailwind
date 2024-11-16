import React, { useContext } from 'react';
import profile from "../assets/user.png"
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/ProviderAuth';

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
        .then(() => {
            console.log("logOut Successful")
        })
        .catch(() => {
            console.log("Logout unsuccessful")
        })
    }
    return (
        <div className='grid grid-cols-3 py-4 items-center'>
            <div>{user?.email}</div>
            <div className='flex justify-center list-none gap-4'>
                <li className='text-[#706F6F]'>Home</li>
                <li className='text-[#706F6F]'>About</li>
                <li className='text-[#706F6F]'>Career</li>
            </div>
            <div className='flex gap-3 items-center justify-end'>
                <img src={profile} alt="" />
                {
                    user ? 
                     <button onClick={handleLogOut} className='font-semibold text-white bg-[#706F6F] py-2 px-6'>SignOut</button>

                     :<Link to={"/auth/login"} className='font-semibold text-white bg-[#706F6F] py-2 px-6'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;