import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import logo from '../media/logo_png.png';

const Navbar = () => {
  const location = useLocation();

  if (location.pathname === '/login') {
    return null;
  };

  return (
    <header className="bg-primary text-creme py-3 px-6 sticky top-0 left-0 w-full z-50 shadow-md">
      <nav className="flex items-center gap-3">
        {/* Links à esquerda */}
        <ul className="flex gap-6 text-lg font-semibold justify-end w-1/2 px-14">
          <li><Link to="/login" className="hover:text-gray-200">Login</Link></li>
          <li><Link to="/" className="hover:text-gray-200">Início</Link></li>
          <li><Link to="/" className="hover:text-gray-200">Agendar</Link></li>
        </ul>

        {/* Logo centralizada */}
        <Link to="/">
          <div className="absolute top-14 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary w-24 h-24 rounded-full flex items-center justify-center cursor-pointer">
            <img src={logo} alt="Logo Afrodite" className="w-20 h-20" />
          </div>
        </Link>

        {/* Links à direita */}
        <ul className="flex gap-6 text-lg font-semibold justify-start w-1/2 px-14">
          <li><Link to="/" className="hover:text-gray-200">Reservas</Link></li>
          <li><Link to="/" className="hover:text-gray-200">Sobre Nós</Link></li>
          <li><Link to="/" className="hover:text-gray-200">Conta</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
