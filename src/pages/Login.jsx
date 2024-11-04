import React, { useState } from 'react';
import { BsEyeSlashFill } from 'react-icons/bs';
import { IoEyeSharp } from 'react-icons/io5';
import { Loading } from '../components/Loading';

// Logo
import logo from '../media/logo.png';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Login = () => {

  const navigate = useNavigate();

  const { isAuthenticated, setIsAuthenticated, signin } = useAuth();

  const [isLogin, setIsLogin] = useState(true);
  const [showPasd, setShowPasd] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [nome, setNome] = useState('');

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAuthenticated(true);
    navigate('/');
  };

  const handleClear = () => {
    console.log('teste')
    setNome('');
    setEmail('');
    setPassword('');
    setPhone('');
    setLoading(false);
  }

  const changeLayout = () => {
    setIsLogin(!isLogin);
    handleClear();
  }

  return (
    <main className='flex-grow bg-[#FFF8DC]'>
      {/* Div central para alternar entre Login e Cadastro */}
      <div className='absolute inset-0 flex justify-center items-center'>
        <div className="rounded-full bg-white shadow-lg flex flex-col cursor-pointer w-40 h-40 overflow-hidden z-30">
          {/* Botão Login */}
          <button
            onClick={changeLayout}
            className={`w-full h-1/2 text-center font-bold ${isLogin ? 'bg-primary text-creme' : 'bg-creme text-primary'
              } transition-colors duration-300`}
            disabled={isLogin}
          >
            Login
          </button>
          {/* Botão Cadastro */}
          <button
            onClick={changeLayout}
            className={`w-full h-1/2 text-center font-bold ${!isLogin ? 'bg-primary text-creme' : 'bg-creme text-primary'
              } transition-colors duration-300`}
            disabled={!isLogin}
          >
            Cadastro
          </button>
        </div>
      </div>


      {isLogin ? (
        <>
          {/* Login */}
          <div className={`flex items-center w-full h-screen z-20`}>
            {/* Form */}
            <div className='w-1/2 z-20'>
              <div className='bg-primary text-white w-1/2 mx-auto px-6 py-4 rounded-md'>
                <h1 className='text-center font-bold text-3xl'>Entrar</h1>
                <div className='border-b border-gray-400 mb-4 mt-2' />
                <form className="rounded space-y-4 md:space-y-2" onSubmit={handleSubmit}>
                  {/* Usuario */}
                  <div className="mb-4">
                    <input
                      className="appearance-none block w-full rounded py-3 px-4 mb-3 mt-1 leading-tight text-primary focus:outline-gray-400"
                      id='email'
                      name='email'
                      type="text"
                      value={email}
                      placeholder="Email"
                      autoComplete='email'
                      onChange={(e) => setEmail(e.target.value)}></input>
                  </div>

                  {/* Senha */}
                  <div className="mb-6">
                    <div className='relative'>
                      <input
                        className="appearance-none block w-full rounded py-3 px-4 mb-3 mt-1 leading-tight text-primary focus:outline-gray-400"
                        id='senha'
                        name='senha'
                        value={password}
                        type={showPasd ? "text" : "password"}
                        placeholder="••••••••"
                        onChange={(e) => setPassword(e.target.value)} />
                      <button
                        className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-400"
                        type='button'
                        onClick={() => setShowPasd(!showPasd)}
                      >
                        {showPasd ? (
                          <BsEyeSlashFill />
                        ) : (
                          <IoEyeSharp />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Remember-me */}
                  <div className="flex items-start gap-1">
                    <div className="flex items-center h-5">
                      <input
                        className="w-4 h-4 bg-[#FFF8DC] rounded focus:ring-3 focus:ring-primary"
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                      />
                    </div>
                    <div className="text-sm">
                      <label htmlFor="remember" className="">Remember me</label>
                    </div>
                  </div>

                  <button className="w-full py-2 font-bold text-lg cursor-pointer text-center focus:outline-none shadow rounded-md bg-gray-50 text-primary hover:bg-gray-100 z-10"
                    type='submit'>
                    {loading ? <Loading /> : 'Entrar'}
                  </button>
                </form>
              </div>
            </div>
            {/* Logo */}
            <div className='w-1/2 bg-primary h-full'>
              <div className='flex justify-center items-center h-full'>
                <img src={logo} alt="logo afrodite" className='h-80' />
              </div>
            </div>

          </div>
        </>
      ) : (
        <>
          {/* Cadastro */}
          <div className='flex items-center w-full h-screen'>
            {/* Logo */}
            <div className='w-1/2 bg-primary h-full'>
              <div className='flex justify-center items-center h-full'>
                <img src={logo} alt="logo afrodite" className='h-80' />
              </div>
            </div>

            {/* Form */}
            <div className='w-1/2 z-20'>
              <div className='bg-primary text-white w-1/2 mx-auto px-8 py-6 rounded-md'>
                <h1 className='text-center font-bold text-3xl'>Cadastrar-se</h1>
                <div className='border-b border-gray-400 mb-4 mt-2' />
                <form className="rounded space-y-4 md:space-y-2" onSubmit={handleSubmit}>

                  {/* Celular */}
                  <div className="mb-4">
                    <input
                      className="appearance-none block w-full rounded py-3 px-4 mb-3 mt-1 leading-tight text-primary focus:outline-gray-400"
                      id='phone'
                      name='phone'
                      type="text"
                      value={phone}
                      placeholder="Telefone"
                      onChange={(e) => setPhone(e.target.value)}></input>
                  </div>
                  {/* Usuario */}
                  <div className="mb-4">
                    <input
                      className="appearance-none block w-full rounded py-3 px-4 mb-3 mt-1 leading-tight text-primary focus:outline-gray-400"
                      id='email'
                      name='email'
                      type="text"
                      value={email}
                      placeholder="Email"
                      autoComplete='email'
                      onChange={(e) => setEmail(e.target.value)}></input>
                  </div>
                  {/* Nome */}
                  <div className="mb-4">
                    <input
                      className="appearance-none block w-full rounded py-3 px-4 mb-3 mt-1 leading-tight text-primary focus:outline-gray-400"
                      id='nome'
                      name='nome'
                      type="text"
                      value={nome}
                      placeholder="Nome"
                      onChange={(e) => setNome(e.target.value)}></input>
                  </div>
                  {/* Senha */}
                  <div className="mb-b">
                    <div className='relative'>
                      <input
                        className="appearance-none block w-full rounded py-3 px-4 mb-3 mt-1 leading-tight text-primary focus:outline-gray-400"
                        id='senha'
                        name='senha'
                        value={password}
                        type={showPasd ? "text" : "password"}
                        placeholder="Senha"
                        onChange={(e) => setPassword(e.target.value)} />
                      <button
                        className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-400"
                        type='button'
                        onClick={() => setShowPasd(!showPasd)}
                      >
                        {showPasd ? (
                          <BsEyeSlashFill />
                        ) : (
                          <IoEyeSharp />
                        )}
                      </button>
                    </div>
                  </div>

                  <button className="w-full py-2 font-bold text-lg cursor-pointer text-center focus:outline-none shadow rounded-md bg-gray-50 text-primary hover:bg-gray-100 z-10"
                    type='submit'>
                    {loading ? <Loading /> : 'Cadastrar-se'}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </>
      )}
    </main>
  );
};

export default Login;
