import React from 'react';

const Service = ({ icon, service, description, border }) => {
  return (
    <div className={`w-full md:w-1/2 lg:w-1/3 p-8 ${border}`}>
      <div className="flex items-center mb-6 ">
        <img src={icon} alt="" className="h-12 w-h-12" />
        <p className="ml-4 text-xl font-semibold uppercase">{service}</p>
      </div>
      <p className="leading-loose">{description}</p>
    </div>
  );
};

export default Service;
