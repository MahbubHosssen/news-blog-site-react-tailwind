import React from 'react';
import Marquee from 'react-fast-marquee';

const Latest = () => {
    return (
        <div className='flex gap-4 bg-[#F3F3F3] p-4 items-center pr-8'>
            <p className='bg-[#D72050] font-semibold py-2 px-3 text-[#F3F3F3]'>Latest</p>
            <Marquee className='space-x-8'>
                <p className='font-semibold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At voluptatum consequatur...</p>
                <p className='font-semibold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At voluptatum consequatur...</p>
                <p className='font-semibold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At voluptatum consequatur...</p>
            </Marquee>
        </div>
    );
};

export default Latest;