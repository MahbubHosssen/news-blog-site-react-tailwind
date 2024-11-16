import React, { useEffect, useState } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';

const LeftNav = () => {
    
    const [categoryData, setCategoryData] = useState([])
    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/news/categories")
        .then(res => res.json())
        .then(data => setCategoryData(data.data.news_category))
    }, [])
    // console.log(categoryData)
    return (
        <div>
            <h2 className='text-lg font-semibold mb-4'>Category</h2>
            <div className='flex flex-col gap-2'>
            {
                categoryData.map(category => 
                    <NavLink className='btn bg-base-100' key={category.category_id} to={`category/${category.category_id}`}>{category.category_name}</NavLink>
                )
            }
        </div>
        </div>
    );
};

export default LeftNav;