import React from 'react';

const NavLinks = ({ setIsMenuOpen, links }) => {
  return (
    <>
      {links.map((link, index) => (
        <li key={index}>
          <a
            href={link.href}
            title={link.title}
            aria-label={link.title}
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            {link.title}
          </a>
        </li>
      ))}
    </>
  );
};

export default NavLinks;
