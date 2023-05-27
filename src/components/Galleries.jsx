import React from 'react';
// import { galleryPlaces } from '../data';
import { placesToGo } from '../data';
import Gallery from './Gallery';

const Galleries = () => {
  return (
    <div className="grid grid-cols-1  sm:grid-cols-2  lg:grid-cols-3">
      {placesToGo.map(place => (
        <Gallery key={place.id} place={place} />
      ))}
    </div>
  );
};

export default Galleries;
