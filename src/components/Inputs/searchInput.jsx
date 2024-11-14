import React, { useEffect, useState } from "react";

// Icones
import { IoFilter } from "react-icons/io5";

export function SearchInput({ onSearch, placeholder, term }) {

  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  useEffect(() => {
    setSearchTerm(term);
  }, [term]);

  return (
    <div className="w-full flex justify-center items-center opacity-85">
      <div className="w-full max-w-4xl flex items-center shadow-md rounded-full overflow-hidden">
        <div className="flex items-center px-6 py-4 bg-primary text-creme font-medium">
          <IoFilter />
          <p className="ml-2">Filtros</p>
        </div>
        <input
          className="w-full px-6 py-4 bg-creme text-gray-700 rounded-r-full focus:outline-none"
          placeholder={placeholder}
          onChange={handleInputChange}
          value={searchTerm}
        />
      </div>
    </div>
  );
}
