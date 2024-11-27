import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import salao from '../media/imagemSalao.png';
import card1 from '../media/cardInicial1.png';
import card2 from '../media/cardInicial2.png';
import card3 from '../media/cardInicial3.png';
import card4 from '../media/cardInicial4.png';
import card5 from '../media/cardInicial5.png';

import { SearchInput } from '../components/Inputs/searchInput';

const Home = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/agendamento');
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <main>
      {/* Container com a imagem de fundo */}
      <div
        className="relative w-full h-[450px] bg-cover bg-center flex flex-col justify-center items-center mb-10"
        style={{ backgroundImage: `url(${salao})` }}
      >
        {/* Camada preta opaca */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Conteúdo sobreposto à imagem */}
        <div className="relative w-3/6 flex flex-col items-center space-y-6 text-creme z-10">
          {/* SearchInput sobreposto */}
          <SearchInput placeholder="Busque um profissional que combina com seu estilo..." onSearch={handleSearch} />
        </div>

        {/* Horário de Atendimento */}
        <div className="text-center z-10 text-creme mt-10 -mb-14">
          <h1 className="text-2xl font-bold">Horário de Atendimento</h1>
          <p className="text-lg mt-2">Segunda a sábado: <span className='font-bold'>07h às 20h</span>| Domingos e feriados: Consultar</p>
          {/* <button onClick={handleSubmit} className='bg-primary px-5 py-3 rounded-md text-creme font-bold mt-5'>Novo Agendamento</button> */}
        </div>
      </div>


      {/* Serviços */}
      <div>
        <h1 className='text-3xl font-black text-center text-primary'>Serviços</h1>

        <div className='mt-10 w-full'>
          <div className="grid grid-cols-5 gap-5 w-5/6 mx-auto">
            {/* Card 1 */}
            <div className="h-[230px] rounded-lg relative overflow-hidden">
              {/* Camada preta opaca */}
              <div className="absolute inset-0 bg-black opacity-50"></div>

              {/* Imagem */}
              <img src={card1} className="w-full h-full object-cover" alt="Manicure" />

              {/* Texto centralizado */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="font-bold text-creme text-3xl">Corte</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="h-[230px] rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <img src={card2} className="w-full h-full object-cover" alt="Maquiagem" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="font-bold text-creme text-3xl">Manicure</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="h-[230px] rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <img src={card3} className="w-full h-full object-cover" alt="Lavagem" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="font-bold text-creme text-3xl">Sobrancelha</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="h-[230px] rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <img src={card4} className="w-full h-full object-cover" alt="Corte" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="font-bold text-creme text-3xl">Depilação</p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="h-[230px] rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <img src={card5} className="w-full h-full object-cover" alt="Outro serviço" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="font-bold text-creme text-3xl">Coloração</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profissionais */}
      <div>
        <h1 className='text-3xl font-black text-center text-primary mt-20'>Profissionais</h1>

        <div className='mt-10 w-full'>
          <div className="grid grid-cols-5 gap-5 w-5/6 mx-auto">
            {/* Card 1 */}
            <Link to="/profissional" >
            <div className="cursor-pointer hover:bg-gray-50 hover:bg-opacity-60 rounded-lg relative overflow-hidden">
              <div className='shadow-md border hover:border-none rounded-md py-4 px-6'>
                <div>
                  {/* Foto */}
                  <div className='mx-auto h-20 w-20 rounded-full bg-gray-200'></div>
                  <p className='text-center text-primary font-semibold text-lg mt-2'>Nome do Profissional</p>
                  <p className='text-center text-gray-400 font-light -mt-2'>Serviço Prestado</p>
                </div>
              </div>
            </div>
            </Link>
            {/* Card 2 */}
            <Link to="/profissional" >
            <div className="cursor-pointer hover:bg-gray-50 hover:bg-opacity-60 rounded-lg relative overflow-hidden">
              <div className='shadow-md border hover:border-none rounded-md py-4 px-6'>
                <div>
                  {/* Foto */}
                  <div className='mx-auto h-20 w-20 rounded-full bg-gray-200'></div>
                  <p className='text-center text-primary font-semibold text-lg mt-2'>Nome do Profissional</p>
                  <p className='text-center text-gray-400 font-light -mt-2'>Serviço Prestado</p>
                </div>
              </div>
            </div>
            </Link>
            {/* Card 3 */}
            <Link to="/profissional" >
            <div className="cursor-pointer hover:bg-gray-50 hover:bg-opacity-60 rounded-lg relative overflow-hidden">
              <div className='shadow-md border hover:border-none rounded-md py-4 px-6'>
                <div>
                  {/* Foto */}
                  <div className='mx-auto h-20 w-20 rounded-full bg-gray-200'></div>
                  <p className='text-center text-primary font-semibold text-lg mt-2'>Nome do Profissional</p>
                  <p className='text-center text-gray-400 font-light -mt-2'>Serviço Prestado</p>
                </div>
              </div>
            </div>
            </Link>
            {/* Card 4 */}
            <Link to="/profissional" >
            <div className="cursor-pointer hover:bg-gray-50 hover:bg-opacity-60 rounded-lg relative overflow-hidden">
              <div className='shadow-md border hover:border-none rounded-md py-4 px-6'>
                <div>
                  {/* Foto */}
                  <div className='mx-auto h-20 w-20 rounded-full bg-gray-200'></div>
                  <p className='text-center text-primary font-semibold text-lg mt-2'>Nome do Profissional</p>
                  <p className='text-center text-gray-400 font-light -mt-2'>Serviço Prestado</p>
                </div>
              </div>
            </div>
            </Link> 
            {/* Card 5 */}
            <Link to="/profissional">
            <div className="cursor-pointer hover:bg-gray-50 hover:bg-opacity-60 rounded-lg relative overflow-hidden">
              <div className='shadow-md border hover:border-none rounded-md py-4 px-6'>
                <div>
                  {/* Foto */}
                  <div className='mx-auto h-20 w-20 rounded-full bg-gray-200'></div>
                  <p className='text-center text-primary font-semibold text-lg mt-2'>Nome do Profissional</p>
                  <p className='text-center text-gray-400 font-light -mt-2'>Serviço Prestado</p>
                </div>
              </div>
            </div>
            </Link>
          </div>
        </div>
      </div>

    </main>
  );
};

export default Home;
