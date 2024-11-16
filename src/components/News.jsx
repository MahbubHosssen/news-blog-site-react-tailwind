// import React, { useEffect } from 'react';
import { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from './NewsCard';

const News = () => {
    const {data:newsData} = useLoaderData()
    
    const params = useParams()


    return (
        <div>
            <h2 className='text-lg font-semibold mb-4'>Dragon News Home</h2>
            <div className=''>
                {
                    newsData.map(singleNews => <NewsCard key={singleNews._id} singleNews={singleNews}></NewsCard> )
                }
            </div>
        </div>
    );
};

export default News;