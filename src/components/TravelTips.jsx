import React from 'react';
import { SectionTitle } from '../components';
import { tips } from '../data';
import TravelTip from './TravelTip';

const TravelTips = () => {
  return (
    <section className="section bg-green-50 text-center" id="tips">
      <div className="section-center">
        <SectionTitle title="travel tips" />
        <p className="mb-6 sm:text-lg md:text-2xl">
          Prepare for your trip with these practical articles
        </p>
        <div className="section-center pt-0">
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-y-6 gap-x-2 sm:gap-x-6">
            {tips.map(tip => (
              <TravelTip key={tip.id} tip={tip} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelTips;
