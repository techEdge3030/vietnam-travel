import React from 'react';
import { Link } from 'react-router-dom';

const Gallery = ({ place }) => {
  const { imageSrc, name } = place;
  return (
    <Link
      to={`places/${name}`}
      className="relative group bg-emerald-300 hover:opacity-75 overflow-hidden"
    >
      <img
        src={imageSrc}
        alt={name}
        className="h-72 w-full object-fit object-cover group-hover:scale-105 group-hover:opacity-75 transition-smooth"
      />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16 sm:h-24 sm:w-24 lg:w-12 lg:h-12 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 duration-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </Link>
  );
};

export default Gallery;
