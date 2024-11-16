import React from 'react';
import logo from "../assets/logo.png"
import moment from 'moment';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center space-y-2 py-2'>
            <img src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p>{moment().format('dddd, MMMM Do YYYY')}</p>
        </div>
    );
};

export default Header;