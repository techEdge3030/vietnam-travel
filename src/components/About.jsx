import React from 'react';
import logo from '../assets/reverie-logo.png';
import { SectionTitle } from '../components';

const About = () => {
  return (
    <section className="section bg-amber-50" id="about">
      <SectionTitle title="about us" />
      <div className="section-center  rounded-3xl">
        <div className=" grid sm:grid-cols-2 gap-4 rounded-3xl">
          <article className="p-4">
            <img
              src={logo}
              alt="company logo"
              className="w-full h-full object-fit rounded-full"
            />
          </article>
          <article className="p-4 sm:flex-col self-center">
            <h3 className="capitalize tracking-widest font-bold  text-xl sm:text-2xl">
              Reverie travel is the leading travel agency in Vietnam.
            </h3>
            <p className="my-6">
              We focus in private Hight quality & Luxury tours in Vietnam and
              Indochine with special style for worldwide travelers for years.
            </p>
            <p>
              No other company puts more efforts into personalizing each tour
              than we do. Our consultants with staffs of dynamic and much
              experience in the field of tourism.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
