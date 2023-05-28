import React from 'react';
import Stars from './Stars';

const SingleReview = ({ review }) => {
  const { title, comment, user, createdAt, rating: stars } = review;
  return (
    <blockquote>
      <header className="sm:items-center sm:flex">
        <Stars stars={stars} />

        <p className="mt-2 font-medium sm:ml-4 sm:mt-0">{title}</p>
      </header>

      <p className="mt-2 text-gray-700 text-sm sm:text-base">{comment}</p>

      <footer className="mt-4">
        <p className="text-xs text-gray-500">{`${
          user.name
        } - ${createdAt.substring(0, 10)}`}</p>
      </footer>
    </blockquote>
  );
};

export default SingleReview;
