import React from 'react';
import {
  About,
  FeaturedTours,
  Hero,
  PlacesToGo,
  Services,
  NewTours,
  Reviews,
  Promotion,
  Blogs,
  TravelTips,
  WhyUs,
  Contact,
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
      <Reviews />
      <Promotion />
      <Blogs />
      <TravelTips />
      <WhyUs />
      <Contact />
    </>
  );
};

export default HomePage;
