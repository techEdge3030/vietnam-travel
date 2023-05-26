import React from 'react';

const SectionTitle = ({ title }) => {
  return (
    <div className="section-title">
      <h2 className="text-gray-600 font-expletus">{title}</h2>
      <div className={`underline bg-gray-800`}></div>
    </div>
  );
};

export default SectionTitle;
