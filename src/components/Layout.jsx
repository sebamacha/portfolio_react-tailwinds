import React from 'react';
import Navbar from '../shared/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../shared/Footer';

const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === '/home'; // Puedes modificar este valor según tus rutas

  return (
    <div className={`${isHome ? 'bg-transparent' : 'bg-gray-200'}`}>
      <Navbar />
      <Outlet />
      <Footer transparentBackground={isHome} />
    </div>
  );
};

export default Layout;
