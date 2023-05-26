import React from 'react';
import { SectionTitle } from '../components';
import Service from './Service';
import { services } from '../data';

const Services = () => {
  return (
    <section className="section bg-gray-100" id="services">
      <SectionTitle title="our services" />
      <div className="section-center bg-gray-50  rounded-3xl">
        <div className="flex flex-wrap">
          {services.map(ser => (
            <Service key={ser.id} {...ser} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
