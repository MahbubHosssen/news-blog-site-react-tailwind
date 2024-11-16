import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Social = () => {
    return (
        <div>
            <h2 className='text-lg font-semibold mb-4'>Login With</h2>
            <div className='*:w-full space-y-2'>
                <button className="btn"><FaGoogle /> Login With Google</button>
                <button className="btn"><FaGithub/> Login With Github</button>
            </div>
        </div>
    );
};

export default Social;