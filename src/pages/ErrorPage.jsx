import React from 'react';
import notFound from '../assets/notFound.svg';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <section className="section bg-gray-100 min-h-screen">
      <div className="section-center grid md:grid-cols-2 ">
        <div className="max-w-2xl grid place-content-center text-center border-b-2 md:border-r-2 md:border-b-0 py-20  md:px-20">
          <h2 className="text-5xl md:text-7xl font-bold">404</h2>
          <p className="text-2xl md:text-4xl font-light">
            Sorry we couldn't find this page.{' '}
          </p>
          <p className="mb-8">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link
            className="btn text-gray-500 bg-white hover:text-gray-700 active:text-gray-700 font-semibold text-2xl"
            to="/"
          >
            Back Home
          </Link>
        </div>
        <div className="max-w-2xl grid place-content-center">
          <div className="py-20">
            <img src={notFound} alt="not found" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
