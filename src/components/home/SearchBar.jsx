"use client"

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar({ termoPesquisa, setTermoPesquisa }) {
  const [valorDigitado, setValorDigitado] = useState(termoPesquisa || "");

  const handlePesquisar = () => {
    setTermoPesquisa(valorDigitado);
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handlePesquisar();
    }
  };

  return (
    <div className="bg-white dark:bg-[#1f1f25] mx-4 md:mx-10 rounded-4xl py-4 px-6 flex flex-col md:flex-row items-center justify-between shadow-lg gap-4 md:gap-10 relative z-20">
      
      <div className="flex flex-col flex-1 w-full lg:w-[410px]">
        <label htmlFor="busca" className="text-[#A29F9F] dark:text-gray-200 text-xs font-bold tracking-wider mb-1">
          BUSCAR IMÓVEIS
        </label>
        
        <input
          id="busca"
          type="text"
          value={valorDigitado}
          onChange={(e) => setValorDigitado(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Pesquise por cidade, bairro ou título do imóvel..."
          className="text-[#545F71] dark:text-white bg-transparent outline-none w-full text-lg placeholder-gray-500 dark:placeholder-gray-400 focus:ring-0"
          autoComplete="off"
        />
      </div>

      <button 
        onClick={handlePesquisar} 
        className="py-3 px-8 flex flex-row items-center justify-center bg-gradient-to-r from-[#1B3B99] dark:from-[#b6c4ff] to-[#819BFF] rounded-3xl gap-4 hover:scale-105 transition shrink-0 w-full md:w-auto"
      >
        <FontAwesomeIcon icon={faSearch} className="text-white text-xl dark:text-black"></FontAwesomeIcon>
        <span className="font-bold text-white dark:text-black">Pesquisar</span>
      </button>
    
    </div>
  );
}