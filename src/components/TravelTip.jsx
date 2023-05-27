import React from 'react';
import { Link } from 'react-router-dom';

const TravelTip = ({ tip }) => {
  const { icon, title } = tip;
  return (
    <Link to={`tips/${title}`}>
      <div className="flex flex-col bg-green-100 text-center items-center border-green-200 border-2 hover:bg-green-50 hover:scale-110 transition-smooth">
        <img
          src={icon}
          alt={title}
          className="w-12 h-12 sm:w-16 sm:h-16  p-2 box-content"
        />
        <p className="capitalize text-base sm:text-lg md:text-2xl py-2  px-0 font-semibold italic">
          {title}
        </p>
      </div>
    </Link>
  );
};

export default TravelTip;
