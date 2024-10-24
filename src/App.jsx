import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import { AuthProvider } from './contexts/auth';


// Componentes
import Navbar from './components/Navbar'; // Importando o Menu
import Footer from './components/Footer'; // Importando o Footer

// Paginas
const Home = lazy(() => import('./pages/Home'));

function App() {
  return (
    // Autenticação
    <AuthProvider>
      <Router>

        {/* Carregamento Asincrono das paginas */}
        <Suspense fallback={<p>Carregando...</p>}>

          {/* Menu */}
          <Navbar />

          {/* Rotas */}
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>

          {/* Rodapé */}
          <Footer />
        </Suspense>
      </Router>

      {/* Mensagem */}
      <ToastContainer
        autoClose={3000}
        position="top-right"
      />
    </AuthProvider>
  );
}

export default App;
