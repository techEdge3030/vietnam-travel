import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar, Footer } from '../components';
const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default SharedLayout;
