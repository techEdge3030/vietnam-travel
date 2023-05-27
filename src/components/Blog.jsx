import React from 'react';
import { formatDate } from '../utils/helpers';

const Blog = ({ blog }) => {
  const { imageSrc, title, description, source, date, timeToRead, url } = blog;
  return (
    <section className={`group bg-blue-100 shadow-lg`}>
      <article className="rounded-2xl">
        <div className="relative h-60">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-center object-cover group-hover:opacity-75"
          />
        </div>
        <div className="p-4 flex-col">
          <h3 className="mt-4 text-2xl font-bold">{title}</h3>
          <p className="my-6">
            {description.substring(0, 200)}...
            <a
              href={url}
              className="read-more text-gray-600 hover:text-gray-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more
            </a>
          </p>
          <div className="flex items-center mt-4">
            <div href="#" className="block relative">
              <img
                alt={title}
                src={imageSrc}
                className="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </div>
            <div className="flex flex-col justify-between ml-4 text-sm">
              <p className="text-gray-800 font-semibold">{source}</p>
              <p className="text-gray-600">
                {formatDate(date)} - {timeToRead} minutes read{' '}
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Blog;
