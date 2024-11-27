import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

import logo from '../media/logo_png.png';
import user from '../media/user.jpg';
import { TbLogout2 } from "react-icons/tb";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, signout } = useAuth();
  console.log(isAuthenticated)

  if (location.pathname === '/login') {
    return null;
  }

  return (
    <>
    <div className={`modal-overlay fixed inset-0 z-50 ${isMenuOpen ? 'block' : 'hidden'}`} onClick={() => setIsMenuOpen(false)}></div>
      <header className="bg-primary text-creme py-2 px-6 sticky top-0 left-0 w-full z-50 shadow-md select-none max-h-16">
        <nav className="flex items-center gap-3">
          {/* Links à esquerda */}
          <ul className="flex gap-6 text-lg font-semibold justify-end w-1/2 px-14" onClick={() => setIsMenuOpen(false)}>
            <li><Link to="/agendamento" className="hover:text-gray-200">Serviços</Link></li>
            <li><Link to="/profissional" className="hover:text-gray-200">Profissionais</Link></li>
          </ul>

          {/* Logo centralizada */}
          <Link to="/">
            <div className="absolute top-14 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary w-24 h-24 rounded-full flex items-center justify-center cursor-pointer" onClick={() => setIsMenuOpen(false)}>
              <img src={logo} alt="Logo Afrodite" className="w-16 h-16" />
            </div>
          </Link>

          {/* Links à direita */}
          <div className="flex items-center justify-between w-1/2">
            <ul className="flex gap-6 text-lg font-semibold justify-start px-14" onClick={() => setIsMenuOpen(false)}>
              <li><Link to="/" className="hover:text-gray-200">Sobre Nós</Link></li>
              <li><Link to="/login" className="hover:text-gray-200">Login</Link></li>
            </ul>

            {/* Usuário */}
            {isAuthenticated && (
              <>
                <div className="relative flex items-center gap-2 cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  <p className="text-creme text-xs font-medium"></p>
                  <div className="w-8 h-8 bg-creme rounded-full overflow-hidden">
                    <img src={user} alt="user img" className="w-full h-full object-cover" />
                  </div>

                </div>
                {isMenuOpen && (
                  <div className="absolute right-4 top-full bg-creme text-primary shadow-lg rounded-lg py-2 w-56 select-none">
                    <div className='text-right px-4 mb-2'>
                      <p className='font-medium'>Fellipe Tereska</p>
                      <p className='text-xs font-light'>Cliente</p>
                    </div>
                    <ul className='mb-2'>
                      <li className="px-4 py-2 hover:bg-primary hover:text-creme cursor-pointer border-b border-t border-primary"><Link to="/agendamento">Agendamentos</Link></li>
                      <li className="px-4 py-2 hover:bg-primary hover:text-creme cursor-pointer border-b border-primary">Sua Conta</li>
                    </ul>
                    <div className='px-4 flex justify-end'>
                      <div className='inline-flex cursor-pointer hover:bg-opacity-85 px-2 py-2 rounded-full bg-primary text-creme' onClick={signout}>
                        <TbLogout2 />
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}

          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
