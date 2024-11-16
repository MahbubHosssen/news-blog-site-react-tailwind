import React from "react";
import { AiFillStar } from "react-icons/ai"; // React Icons for stars
import { FaEye } from "react-icons/fa"; // React Icon for views
import { Link } from "react-router-dom";

const NewsCard = ({ singleNews }) => {
  // console.log(singleNews)
  return (
    <div className="card bg-white shadow-lg rounded-lg border p-4 max-w-full mx-auto">
      {/* Thumbnail Image */}
      <img
        src={singleNews.thumbnail_url}
        alt="Thumbnail"
        className="rounded-t-lg w-full h-80 cover "
      />
      
      {/* Card Content */}
      <div className="card-body mt-4">
        {/* Title */}
        <h2 className="card-title text-lg font-bold text-gray-800">
          {singleNews.title}
        </h2>
        
        {/* Author Info */}
        <div className="flex items-center mt-2">
          <img
            src={singleNews.author.img}
            alt="Author"
            className="w-8 h-8 rounded-full border mr-2"
          />
          <p className="text-gray-600 text-sm">
            {singleNews.author.name} · {new Date(singleNews.author.published_date).toLocaleDateString()}
          </p>
        </div>
        
        {/* Details */}
        <div>
        <p className="text-gray-700 text-sm mt-4">
          {singleNews.details.length > 100
            ? `${singleNews.details.substring(0, 100)}...`
            : singleNews.details}
        </p>
        <Link to={`/news/details/${singleNews._id}`} className="text-orange-600"> Read More</Link>
        </div>
        
        {/* Read More Button */}
        {/* <button className="">Read More</button> */}
        
        {/* Ratings and Views */}
        <div className="flex justify-between items-center mt-4">
          {/* Ratings */}
          <div className="flex items-center">
            <AiFillStar className="text-yellow-400 mr-1" />
            <span className="text-sm text-gray-600">{singleNews.rating.number}</span>
          </div>
          
          {/* Views */}
          <div className="flex items-center">
            <FaEye className="text-gray-600 mr-1" />
            <span className="text-sm text-gray-600">{singleNews.total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
