import React from 'react'
import { Link } from 'react-router-dom';

import Buco from '../media/Buco.png'

const Agendamento = () => {
    return(
        <main className='flex justify-center items-center h-screen '>
            <div className='bg-[#DEB887] w-4/5 h-5/6 rounded-3xl'>
                <div className='bg-white w-11/12 mx-auto h-1/4 flex items-center mt-12 rounded-xl shadow-card'>
                    <img src={Buco} alt="" className='h-4/6 ml-10' />
                    <div className=' ml-10'>
                        <h1 className='mb-5 font-bold text-2xl'>Depilação de Buço</h1>
                        <p className='text-2xl'>A depilação de buço na linha remove os pelos acima dos lábios. É um procedimento rápido e eficaz.</p>
                    </div>

                    <div  className='flex flex-col gap-10 h-full justify-center  mr-20 text-white w-4/12 '>
                        <button className='bg-primary  ml-auto py-2 px-8 rounded-3xl text-xl font-bold shadow-butao'><Link to="/profissional">15 Min...</Link></button>
                        <button className='bg-primary  ml-auto py-2 px-5  rounded-3xl text-xl font-bold shadow-butao'><Link to="/profissional">R$20,00</Link></button>
                    </div>

                </div>
                <div className='bg-white w-11/12 mx-auto h-1/4 flex items-center mt-10 rounded-xl shadow-card'>
                    <img src={Buco} alt="" className='h-4/6 ml-10' />
                    <div className=' ml-10'>
                        <h1 className='mb-5 font-bold text-2xl'>Curso de Maquiagem</h1>
                        <p className='text-2xl'>Aprenda técnicas essenciais para realçar sua beleza. Ideal para quem deseja aprimorar suas habilidades de maquiagem.</p>
                    </div>
                    <div  className='flex flex-col gap-10 h-full justify-center  mr-20 text-white w-4/12 '>
                        <button className='bg-primary  ml-auto py-2 px-8 rounded-3xl text-xl font-bold shadow-butao'><Link to="/profissional">4 Horas</Link></button>
                        <button className='bg-primary  ml-auto py-2 px-5  rounded-3xl text-xl font-bold shadow-butao'><Link to="/profissional">R$380,00</Link></button>
                    </div>
                    
                </div>
                <div className='bg-white w-11/12 mx-auto h-1/4 flex items-center mt-10 rounded-xl shadow-card'>
                    <img src={Buco} alt="" className='h-4/6 ml-10' />
                    <div className=' ml-10'>
                        <h1 className='mb-5 font-bold text-2xl'>Limpeza de Pele</h1>
                        <p className='text-2xl'>Tratamento profundo que remove inpurezas, células mortas e excesso de oleosidade, deixando a pele saúdavel e renovada.</p>
                    </div>
                    <div  className='flex flex-col gap-10 h-full justify-center  mr-20 text-white w-4/12 '>
                        <button className='bg-primary  ml-auto py-2 px-8 rounded-3xl text-xl font-bold shadow-butao'><Link to="/profissional">2 Horas</Link></button>
                        <button className='bg-primary  ml-auto py-2 px-5  rounded-3xl text-xl font-bold shadow-butao'><Link to="/profissional">R$120,00</Link></button>
                    </div>
                    
                </div>
               
            </div>
        </main>
    )
}

export default Agendamento;