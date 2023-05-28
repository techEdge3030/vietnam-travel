import React from 'react';

const ImageHeader = ({ img }) => {
  return (
    <>
      <div className="relative -mx-4 top-0 pt-[17%] overflow-hidden">
        <img
          className="absolute inset-0 object-cover object-top w-full h-full filter blur"
          src={img}
          alt="page background"
        />
      </div>

      <div className="mt-[-10%] w-1/2 mx-auto">
        <div className="relative pt-[56.25%] overflow-hidden rounded-2xl">
          <img
            className="w-full h-full absolute inset-0 object-cover"
            src={img}
            alt="page cover"
          />
        </div>
      </div>
    </>
  );
};

export default ImageHeader;
