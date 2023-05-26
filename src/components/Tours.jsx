import React from 'react';
import { Link } from 'react-router-dom';
const Tours = ({ tours, color, extraCol }) => {
  return (
    <div
      className={`grid-container ${
        extraCol ? 'xl:grid-cols-4 xl:gap-x-6' : ''
      }`}
    >
      {tours.map(tour => (
        <div
          key={tour.id}
          className={`group bg-${color}-100 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out bg-${color}-200 overflow-hidden`}
        >
          <Link to={`/tours/${tour.name}`}>
            <div
              className={`relative h-60  bg-gray-500 rounded-t-lg overflow-hidden`}
            >
              <img
                src={tour.imageSrc}
                alt={tour.imageAlt}
                className="w-full h-full object-center object-cover group-hover:opacity-75 group-hover:scale-110 transition duration-300 ease"
              />
              <p
                className={`absolute right-0 bottom-0 bg-white sm:text-lg  capitalize py-2 px-4 font-bold rounded-tl-xl italic`}
              >
                {tour.startDate}
              </p>
            </div>
            <div className={`p-4  flex-col `}>
              <h3 className="mt-4 text-2xl font-bold">{tour.name}</h3>
              <p className="my-6">
                {tour.description.substring(0, 180)}...
                <button
                  className={`read-more text-${color}-500 hover:text-${color}-700`}
                >
                  Read more
                </button>
              </p>
              <div
                className={`flex justify-between text-lg text-${color}-900 font-semibold capitalize`}
              >
                <p>{tour.region}</p>
                <p> {tour.price}</p>
                <p>{tour.duration}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Tours;
