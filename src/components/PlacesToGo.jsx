import React from 'react';
import { SectionTitle } from '../components';
import { placesToGo } from '../data';
import PlaceToGo from './PlaceToGo';
import SectionIntro from './SectionIntro';

const PlacesToGo = () => {
  return (
    <>
      <section className="section bg-white" id="places">
        <SectionTitle title="places to go" />
        <div className="section-center ">
          {/* Places-to-go introduction */}
          <SectionIntro
            title="Explore the best places in Vietnam"
            intro=" Choose from the best holiday destinations in Vietnam. And best of
              all, it’s quarantine-free for the fully vaccinated. You are free
              to enjoy full holiday access upon arrival. Take in new sites,
              sounds, and flavors. Experiences that are truly memorable. Live
              fully in Vietnam."
          />

          {/* Places-to-go */}
          <div className="flex flex-wrap md:-m-2 -m-1">
            {/* 1st half */}
            <div className="places-container">
              {placesToGo.slice(0, 3).map((place, index) => (
                <PlaceToGo
                  key={place.id}
                  place={place}
                  half={index !== placesToGo.slice(0, 3).length - 1}
                />
              ))}
            </div>

            {/* 2nd half */}
            <div className="places-container">
              {placesToGo.slice(3, placesToGo.length).map((place, index) => (
                <PlaceToGo key={place.id} place={place} half={index !== 0} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlacesToGo;
