import React from "react";
import { FaStar } from "react-icons/fa";
import { HiArrowSmRight } from "react-icons/hi";
import { Link } from 'react-router-dom';

const ProfessionalCard = () => {
    const StarRating = () => {
        return (
            <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                    <FaStar key={index} className="text-yellow-500 fill-current text-3xl" />
                ))}
            </div>
        );
    };

    return (
        <main className="flex justify-center items-center">
            <section className="bg-[#DEB887] w-11/12 flex items-center justify-center h-[600px] mt-40 flex-col gap-20 rounded-3xl ">
                <div className="flex justify-start items-center bg-white w-11/12 h-1/4 mt-10 rounded-xl">
                    <div className='ml-10 h-5/6 w-24 rounded-full bg-gray-200'></div>
                    <h1 className="ml-32 text-2xl font-extrabold">Andreia Gomes</h1>
                    <div className="ml-auto mr-14"><StarRating></StarRating></div>
                    <Link to="selecionar_data"><button className="text-4xl mr-14"><HiArrowSmRight></HiArrowSmRight></button></Link>
                </div>
                <div className="flex justify-start items-center bg-white w-11/12 h-1/4 rounded-xl ">
                    <div className='ml-10 h-5/6 w-24 rounded-full bg-gray-200'></div>
                    <h1 className="ml-32 text-2xl font-extrabold">Andreia Gomes</h1>
                    <div className="ml-auto mr-14"><StarRating></StarRating></div>
                    <Link to="selecionar_data"><button className="text-4xl mr-14"><HiArrowSmRight></HiArrowSmRight></button></Link>
                </div>
                <div className="flex justify-start items-center bg-white w-11/12 h-1/4 mb-10 rounded-xl">
                    <div className='ml-10 h-5/6 w-24 rounded-full bg-gray-200'></div>
                    <h1 className="ml-32 text-2xl font-extrabold">Andreia Gomes</h1>
                    <div className="ml-auto mr-14"><StarRating></StarRating></div>
                    <Link to="selecionar_data"><button className="text-4xl mr-14"><HiArrowSmRight></HiArrowSmRight></button></Link>
                </div>
            </section>
        </main>
    )
}




export default ProfessionalCard;