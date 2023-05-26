import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar, Footer } from '../components';
const SharedLayout = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default SharedLayout;
