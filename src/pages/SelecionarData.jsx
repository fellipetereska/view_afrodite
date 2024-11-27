import React from "react";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';



const SelecionarData = () => {
  return (
    <div className="w-full mt-16">
      <div className="w-5/6 mx-auto px-6 py-4">

        {/* Foto/Dados */}
        <div className="flex items-center gap-6 px-6 py-4">
          <Link to="/profissional"><FaArrowLeft className="text-gray-400 hover:text-gray-700 cursor-pointer" /></Link>

          {/* Foto */}
          <div className="w-20 h-20 bg-gray-300 rounded-full"></div>

          {/* Dados */}
          <div>
            <h1 className="text-2xl font-semibold text-gray-400">Andreia Gomes</h1>
            <p className="-mt-1 text-gray-400 font-light">Manicure</p>
          </div>
        </div>

        <hr />

        <h1 className="mt-10 ml-6 text-xl font-semibold text-gray-400">Datas Disponíveis</h1>
        {/* Datas Sugeridas */}
        <div className="w-full px-6 py-4">
          <ul className="space-y-6">
            <li className="border-b border-gray-200">
              <div className="px-6 py-4">
                <h2>Sexta-Feira, <span className="text-gray-400">06 de Setembro de 2024</span></h2>
                <div className="mt-4">
                  <ul className="flex space-x-4 ml-2">
                    <li className="bg-white flex items-center justify-center px-4 py-2 rounded-md">
                      <MdOutlineAccessTime />
                      <span className="ml-2 text-black">13:30</span>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default SelecionarData;