import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import RightNav from '../components/RightNav';
import { useParams } from 'react-router-dom';

const NewsDetails = ({}) => {
    const params = useParams()
    const [matchDataDetails, setMatchDataDetails] = useState({})
    
    useEffect(() => {
        fetch("/public/news.json")
        .then(res => res.json())
        .then(data => {
            const matchData = data.find(item => item._id === params.id)
            setMatchDataDetails(matchData)
        })
    })

    return (
        <div>
            <Header></Header>
            <div className='grid grid-cols-12 w-11/12 mx-auto gap-4'>
                <section className='col-span-9'>
                    <h2 className='text-lg font-semibold mb-4'>Dragon News</h2>
                    <div className=' border p-6 space-y-4'>
                        <img className='w-full h-[500px]' src={matchDataDetails.thumbnail_url} alt="" />
                        <h2>{matchDataDetails.title}</h2>
                        <p>{matchDataDetails.details}</p>
                        <button className='btn'>All News In This Category</button>
                    </div>
                </section>
                <aside className='col-span-3'>
                    <RightNav></RightNav>
                </aside>
            </div>
        </div>
    );
};

export default NewsDetails;