import React from 'react';
import { SectionTitle } from '../components';
import SectionIntro from './SectionIntro';
import { blogs } from '../data';
import Blog from './Blog';

const Blogs = () => {
  return (
    <section className="section bg-blue-50" id="blogs">
      <SectionTitle title="blogs" />
      <div className="section-center rounded-3xl">
        <SectionIntro
          title="vietnam in the news"
          intro="Our blogs provide all necessary information about Vietnam from culture to destinations, from local food and drink to Vietnam tradition, or festivals and events. Besides, We also give the latest travel news, travel experience, useful advices and tips when traveling to Vietnam. "
        />
        <div className="grid-container">
          {blogs.map((blog, index) => (
            <Blog key={index} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
