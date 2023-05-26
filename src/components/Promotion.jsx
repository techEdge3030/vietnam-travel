import React from 'react';
import promo from '../assets/promo.jpg';

const Promotion = () => {
  return (
    <section className="section relative overflow-hidden group" id="promo">
      <img
        className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-40 sm:opacity-100 group-hover:scale-110 transition duration-500 ease-linear"
        src={promo}
        alt="Couple on a bed with a dog"
      />

      <div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-tr sm:from-green-100 sm:to-transparent"></div>

      <div className="relative section-center lg:h-3/4 lg:items-center lg:flex">
        <div className="max-w-xl text-center sm:text-left">
          <h2 className="text-5xl text-gray-700 font-bold ">
            Let us take you around
            <p className="font-extrabold text-green-700 mt-4">Vietnam</p>
          </h2>

          <p className="text-gray-700 max-w-lg my-8 sm:leading-relaxed sm:text-xl">
            Vietnam is an exhilarating country to travel, home to breathtaking
            nature, vibrant culture and friendly people.
          </p>

          <div className="grid gap-y-4 sm:grid sm:grid-cols-2 sm:gap-x-8  text-center">
            <a
              className="btn  text-white   bg-green-500  hover:bg-green-600 active:bg-green-600   "
              href="#tips"
            >
              Travel tips
            </a>

            <a
              className="btn   text-green-500   bg-white  hover:text-green-600 active:text-green-600 "
              href="#whyUs"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
