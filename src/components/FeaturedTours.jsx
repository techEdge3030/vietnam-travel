import React from 'react';
import Tours from './Tours';
import { SectionTitle } from '../components';
import { tours } from '../data';

const featuredTours = tours.slice(0, 6);

const FeaturedTours = () => {
  return (
    <section className="section bg-gray-50" id="featured">
      <SectionTitle title="featured tours" />
      <div className="section-center  rounded-3xl ">
        <Tours tours={featuredTours} color="gray" />
      </div>
    </section>
  );
};

export default FeaturedTours;
