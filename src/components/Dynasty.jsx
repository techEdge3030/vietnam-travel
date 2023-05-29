import React from 'react';

const Dynasty = ({ dynasty }) => {
  const { name, description, img, places } = dynasty;
  return (
    <div className="tip-container">
      <h3 className="tip-title">{name}</h3>
      {description.map((desc, index) => (
        <p key={index}>{desc}</p>
      ))}

      <img src={img} alt={name} />

      {places.length > 0 ? <h4 className="notice">Places to discover:</h4> : ''}

      <p className="grid gap-2">
        {places.map((place, index) => {
          return (
            <div key={index}>
              <b>{place.name}</b> - {place.description}
            </div>
          );
        })}
      </p>
    </div>
  );
};

export default Dynasty;
