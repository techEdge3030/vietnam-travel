import React from 'react';
import { Link } from 'react-router-dom';

const PlaceToGo = ({ place, half }) => {
  const { imageSrc, name } = place;
  return (
    <Link
      to={`places/${name}`}
      className={`${half ? 'place-link-half' : ''} group place-link `}
    >
      <img alt={name} className="place-img" src={imageSrc} />
      <div className="place-title font-expletus">
        <h4>{name}</h4>
      </div>
    </Link>
  );
};

export default PlaceToGo;
