import React, { useState } from 'react';

const TourGallery = ({ images }) => {
  const [main, setMain] = useState(images[0]);
  return (
    <div className="border-b-2 py-10 overflow-hidden">
      <div className="img-container">
        <img
          src={main}
          alt=""
          className="h-[300px] sm:h-[400px] md:h-[500px] w-full  object-cover hover:scale-110 transition-all duration-500 ease-in"
        />
      </div>
      <div className="mt-4 grid grid-cols-5 gap-x-2">
        {images.map((image, index) => {
          return (
            <img
              src={image}
              alt={image}
              key={index}
              onClick={() => setMain(images[index])}
              className={`h-16 w-full sm:h-24 lg:h-32 cursor-pointer object-top rounded-lg ${
                image === main ? 'border-4 border-gray-400' : ''
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TourGallery;
