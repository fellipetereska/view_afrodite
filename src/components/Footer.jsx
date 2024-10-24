import React from 'react';

const Footer = () => {
  return (
    <footer className=" text-gray-600 border-t border-gray-200 text-center p-3 fixed bottom-0 left-0 w-full">
      <p>&copy; {new Date().getFullYear()} Afrodite. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
