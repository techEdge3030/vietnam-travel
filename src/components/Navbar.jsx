import React, { useState, useEffect } from 'react';
import navLogo from '../assets/navLogo.svg';
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';
import { leftLinks } from '../data';
import { rightLinks } from '../data';

const Navbar = () => {
  const [stickyNavbar, setStickyNavbar] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [stickyNavbar]);

  const handleScroll = () => {
    setStickyNavbar(window.pageYOffset > 600);
  };

  return (
    <>
      <nav
        className={`text-center z-50 w-full absolute ${
          stickyNavbar
            ? 'font-expletus animate-fade-in-down sticky top-0 bg-gray-50 shadow-sm'
            : ''
        }`}
      >
        <div
          className={`section-center flex items-center justify-between lg:justify-center lg:space-x-32 sticky text-center z-50 w-full ${
            stickyNavbar ? 'py-4' : ''
          }`}
        >
          <ul className="nav-links-container">
            <NavLinks links={leftLinks} setIsMenuOpen={setIsMenuOpen} />
          </ul>
          <Link
            to="/"
            aria-label="Reverie Travel"
            title="Reverie Travel"
            className="inline-flex items-center"
          >
            <img src={navLogo} className="w-8 h8" alt="company logo" />

            <span className="company-name sm:text-2xl">Reverie Travel</span>
          </Link>
          <ul className="nav-links-container">
            <NavLinks links={rightLinks} setIsMenuOpen={setIsMenuOpen} />
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded hover:scale-125"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-black sm:w-8w" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="animate-fade-in-down absolute top-0 left-0 w-full text-black bg-green-50 text-left p-5  border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      to="/"
                      aria-label="Reverie Travel"
                      title="Reverie Travel"
                      className="inline-flex items-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <img
                        src={navLogo}
                        className="w-8 h8"
                        alt="company logo"
                      />
                      <span className="company-name">Reverie Travel</span>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <NavLinks links={leftLinks} setIsMenuOpen={setIsMenuOpen} />
                    <NavLinks
                      links={rightLinks}
                      setIsMenuOpen={setIsMenuOpen}
                    />
                  </ul>
                </nav>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
