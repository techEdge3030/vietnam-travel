import React from 'react';
import { SectionTitle } from '../components';
import { features } from '../data';

const WhyUs = () => {
  return (
    <section className="section" id="whyUs">
      <div className="section-center">
        <SectionTitle title="why travel with us?" />

        <p className="max-w-2xl text-xl text-gray-500 mx-auto text-center">
          We specialize in organizing travel itineraries to Domestic and
          International Destinations. All Indochina tours Reverie Travel
          provides are tailor-made.
        </p>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map(feature => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-amber-200 text-white">
                    {/* <feature.icon /> */}
                    <img
                      src={feature.icon}
                      className="h-6 w-6"
                      aria-hidden="true"
                      alt={feature.name}
                    />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
