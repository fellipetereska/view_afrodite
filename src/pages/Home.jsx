import React from 'react';
import { useNavigate } from 'react-router-dom';

import salao from '../media/imagemSalao.png'
import card1 from '../media/cardInicial1.png'
import card2 from '../media/cardInicial2.png'
import card3 from '../media/cardInicial3.png'
import card4 from '../media/cardInicial4.png'



const Home = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/agendamento');
  };

  return (
    <main >
      <img src={salao} alt='Foto do Salão de Beleza' className='w-full h-445 ' />
      <div className='text-center my-8'>
        <p className='text-2xl font-normal'>Segunda a sábado:   07h às 20h | Domingos e feriados: Consultar </p>
      </div>
      <div className='flex w-screen gap-4 h-64'>
        <img src={card1} alt="" className='w-1/4' />
        <img src={card2} alt="" className='w-1/4' />
        <img src={card3} alt="" className='w-1/4' />
        <img src={card4} alt="" className='w-1/4' />
      </div>
      <div className='flex justify-center items-center mt-5'>
        <button onClick={handleSubmit} className='bg-[#DEB887] w-1/4 py-4 rounded-md text-white text-2xl font-bold'>Novo Agendamento +</button>
      </div>
    </main>
  );
};

export default Home;
