import React from 'react';

const TipsHeader = ({ title, author, date }) => {
  return (
    <header className="border-b-2 border-gray-200 ">
      <h2 className="text-xl sm:text-2xl font-bold">{title}</h2>
      <p className="mt-2 text-sm text-gray-500 py-4">
        {author}, {date}
      </p>
    </header>
  );
};

export default TipsHeader;
