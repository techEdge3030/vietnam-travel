import React, { useState } from 'react';

const Accordion = ({ title, info, active }) => {
  const [showInfo, setShowInfo] = useState(active);

  const toggleQuestion = () => {
    setShowInfo(!showInfo);
  };

  return (
    <article className="">
      <header className="flex justify-between items-center bg-gray-100 mb-4 p-4 text-lg sm:text-xl md:text-2xl font-semibold ">
        <h4>{title}</h4>
        <button onClick={toggleQuestion}>
          {showInfo ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 sm:h-8 sm:w-8 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 sm:h-8 sm:w-8 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          )}
        </button>
      </header>
      {showInfo &&
        title === 'Itinerary' &&
        info.map((i, index) => {
          return (
            <div key={index} className="px-1">
              <h3 className="mt-4 text-lg font-bold">
                <span>Day {index + 1}: </span>
                {i.highLight}
              </h3>
              {i.details.map((de, ind) => (
                <p key={ind} className="my-3">
                  🧳{de}
                </p>
              ))}
            </div>
          );
        })}
      {showInfo && title !== 'Itinerary' && (
        <ul className="list-disc">
          {info.map((i, index) => {
            return (
              <>
                <li key={index} className="my-2 ml-6 px-1">
                  {i}
                </li>
              </>
            );
          })}
        </ul>
      )}
    </article>
  );
};

export default Accordion;
