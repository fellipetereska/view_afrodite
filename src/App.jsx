import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import { AuthProvider } from './contexts/auth';
import useAuth from './hooks/useAuth';

// Componentes
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';

import { Loading } from './components/Loading';

// Paginas
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Agendamento = lazy(() => import('./pages/Agendamento'))
const SelecionarData = lazy(() => import('./pages/SelecionarData'))
const Profissional = lazy(() => import('./pages/Profissionais'))

function App() {
  return (
    // Autenticação
    <AuthProvider>
      <Router>

        {/* Carregamento Asincrono das paginas */}
        <Suspense fallback={<Loading />}>

          {/* Menu */}
          <Navbar />

          {/* Rotas */}
          <Routes>
            <Route path="/login" element={<Login />} />
            
            <Route path="/" element={<Home />} />
            <Route path='/agendamento' element={<Agendamento/>}/>
            <Route path='/profissional/selecionar_data' element={<SelecionarData/>}/>
            <Route path='/profissional' element={<Profissional/>}/>
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
