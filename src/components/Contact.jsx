import React from 'react';
import { SectionTitle } from '../components';
import contact from '../assets/contact.png';

const Contact = () => {
  return (
    <section className="section bg-amber-50" id="contact">
      <SectionTitle title="contact us" />
      <div className="section-center">
        <div className="flex flex-col md:flex-row  ">
          <div className="flex flex-col w-full lg:w-2/5 pb-8 text-center sm:text-left">
            <p className="text-3xl md:text-4xl text-yellow-500 my-4 leading-relaxed md:leading-snug">
              Contact our team
            </p>
            <p className="font-sans text-sm md:text-lg my-2 md:my-4">
              <svg
                className="inline-block fill-current mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
              </svg>
              1 Nguyen Hue street, District 1, HCM City, Vietnam
            </p>
            <p className="font-sans text-sm md:text-lg my-2 md:my-4">
              <svg
                className="inline-block fill-current mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z" />
              </svg>{' '}
              contact@reverietravel.com
            </p>
            <p className="font-sans text-sm md:text-lg my-2 md:my-4">
              <svg
                className="inline-block fill-current mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" />
              </svg>
              +84 366 270 052
            </p>{' '}
            <br />
          </div>
          <div className=" flex flex-col lg:w-3/5 justify-center w-full lg:-mt-12">
            <div className="container">
              <div className="relative flex flex-col min-w-0 break-words w-full">
                <div className="flex-auto p-5 lg:p-10">
                  <img src={contact} alt="contact team" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
