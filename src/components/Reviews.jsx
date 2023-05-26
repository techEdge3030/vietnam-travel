import React from 'react';
import { SectionTitle } from '../components';
import Review from './Review';
import { reviews } from '../data';

const Reviews = () => {
  return (
    <section className="section bg-gray-50" id="reviews">
      <SectionTitle title="reviews" />
      <p className="text-center text-lg sm:text-2xl font-semibold mb-8">
        Read trusted reviews from our customers
      </p>
      <div className="section-center bg-gray-100 rounded-full sm:rounded-full">
        <div className="max-w-5xl px-4 py-8 mx-auto">
          <div className="my-20 text-gray-700">
            <div className="grid md:grid-cols-3 gap-6 lg:gap-12 text-center">
              {reviews.map(review => (
                <Review key={review.id} review={review} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
