import React from 'react';
import Tours from './Tours';
import { tours } from '../data';
import { SectionTitle } from '../components';

const newTours = tours.slice(6);

const NewTours = () => {
  return (
    <>
      <section className="section bg-purple-50 " id="Tours">
        <SectionTitle title="new tours" />
        <div className="section-center  rounded-3xl">
          <Tours tours={newTours} color="gray" extraCol />
        </div>
      </section>
    </>
  );
};

export default NewTours;
