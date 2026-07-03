"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar({ termoPesquisa, setTermoPesquisa }) {
  return (
    <div className="bg-white dark:bg-[#1f1f25] mx-4 md:mx-10 rounded-4xl py-4 px-6 flex flex-col md:flex-row items-center justify-between shadow-lg gap-4 md:gap-10 relative z-20">
      
      <div className="flex flex-col flex-1 w-full lg:w-[410px]">
        <label htmlFor="busca" className="text-[#A29F9F] dark:text-gray-400 text-xs font-bold tracking-wider mb-1">
          BUSCAR IMÓVEIS
        </label>
        
        <input
          id="busca"
          type="text"
          value={termoPesquisa}
          onChange={(e) => setTermoPesquisa(e.target.value)}
          placeholder="Pesquise por cidade, bairro ou título do imóvel..."
          className="text-[#545F71] dark:text-white bg-transparent outline-none w-full text-lg placeholder-gray-300 dark:placeholder-gray-600 focus:ring-0"
          autoComplete="off"
        />
      </div>

      <button className="py-3 px-8 flex flex-row items-center justify-center bg-gradient-to-r from-[#1B3B99] dark:from-[#b6c4ff] to-[#819BFF] rounded-3xl gap-4 hover:scale-105 transition shrink-0 w-full md:w-auto">
        <FontAwesomeIcon icon={faSearch} className="text-white text-xl dark:text-black"></FontAwesomeIcon>
        <span className="font-bold text-white dark:text-black">Pesquisar</span>
      </button>
    </div>
  );
}