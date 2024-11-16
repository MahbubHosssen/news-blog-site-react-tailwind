import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h2 className='text-lg font-semibold mb-4'>Find Us</h2>
            <div className="join flex join-vertical *:bg-base-100 *:justify-start">
                <button className="btn join-item border"><FaFacebook/> Facebook</button>
                <button className="btn join-item border"><FaTwitter/> Twitter</button>
                <button className="btn join-item border"><FaInstagram/> Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;