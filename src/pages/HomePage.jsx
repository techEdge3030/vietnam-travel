import React from 'react';
import {
  About,
  FeaturedTours,
  Hero,
  PlacesToGo,
  Services,
} from '../components';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <FeaturedTours />
      <PlacesToGo />
    </>
  );
};

export default HomePage;
