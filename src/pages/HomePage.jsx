import React from 'react';
import { About, FeaturedTours, Hero, Services } from '../components';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <FeaturedTours />
    </>
  );
};

export default HomePage;
