import React from 'react';

const SectionIntro = ({ title, intro }) => {
  return (
    <div className="flex flex-wrap w-full mb-20 ">
      <h1 className="capitalize sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
        {title}
      </h1>
      <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
        {intro}
      </p>
    </div>
  );
};

export default SectionIntro;
