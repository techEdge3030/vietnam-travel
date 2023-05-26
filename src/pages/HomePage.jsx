import React from 'react';
import {
  About,
  FeaturedTours,
  Hero,
  PlacesToGo,
  Services,
  NewTours,
} from '../components';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <FeaturedTours />
      <PlacesToGo />
      <NewTours />
    </>
  );
};

export default HomePage;
