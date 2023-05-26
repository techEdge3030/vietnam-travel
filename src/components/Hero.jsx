import React from 'react';
import heroVideo from '../assets/hero-video.mp4';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen p-10 flex justify-center items-center bg-green-500">
      <video
        controls=""
        muted
        autoPlay={'autoplay'}
        loop
        className="absolute top-0 left-0 w-full h-full object-cover opacity-80 z-30 "
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag. I suggest you upgrade your
        browser.
      </video>

      <div className="text-5xl z-40 text-center text-white my-20">
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-expletus font-extrabold uppercase">
          Welcome to Vietnam
        </h2>
        <h3 className="text-2xl sm:text-3xl md:text-5xl my-2 sm:my-5 capitalize">
          The hidden charm
        </h3>
        <p className="max-w-2xl mx-auto my-2 sm:my-5 text-base sm:text-xl lg:text-2xl">
          A land of staggering natural beauty and cultural complexities, of
          dynamic mega cities and hill-tribe villages, Vietnam is both exotic
          and compelling.
        </p>

        <a
          href="#featured"
          className={`text-xs bg-white text-gray-800 py-2.5 px-7 mt-2.5 uppercase tracking-wider hover:tracking-widest transition duration-200 ease-in-out`}
        >
          Explore
        </a>
      </div>
    </section>
  );
};

export default Hero;
