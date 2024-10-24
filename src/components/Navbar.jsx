import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-primary text-white py-3 px-6 sticky top-0 left-0 w-full z-50 shadow-md">
      <nav className="flex justify-center gap-10 items-center container mx-auto">
        {/* Links à esquerda */}
        <ul className="flex gap-6 text-lg">
          <li><Link to="/login" className="hover:text-gray-200">Login</Link></li>
          <li><Link to="/" className="hover:text-gray-200">Início</Link></li>
          <li><Link to="/schedule" className="hover:text-gray-200">Agendar</Link></li>
        </ul>

        {/* Logo no centro */}
        <div className="flex-shrink-0">
          <h1 className='text-2xl font-black'>Afrodite</h1>
        </div>

        {/* Links à direita */}
        <ul className="flex gap-6 text-lg">
          <li><Link to="/reservations" className="hover:text-gray-200">Reservas</Link></li>
          <li><Link to="/about" className="hover:text-gray-200">Sobre Nós</Link></li>
          <li><Link to="/account" className="hover:text-gray-200">Conta</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
