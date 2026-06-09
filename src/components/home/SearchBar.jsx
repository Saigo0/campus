import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
  return (
    <div className="bg-white dark:bg-[#1f1f25]  mx-10 rounded-4xl py-4 px-6 flex flex-row items-center justify-center shadow-lg gap-10">
      <div className="flex flex-col">
        <span className="text-[#A29F9F] dark:text-white text-md">
          FILTRAGEM
        </span>
        <span className="text-[#545F71] dark:text-white">
          Quais as características do imóvel ou do contrato?
        </span>
      </div>
      <button className="py-3 px-5 flex flex-row items-center justify-center bg-linear-to-r from-[#1B3B99] dark:from-[#b6c4ff] to-[#819BFF] rounded-3xl gap-4 hover:scale-102 transition">
        <FontAwesomeIcon icon={faSearch} className="text-white text-xl dark:text-black"></FontAwesomeIcon>
        <span className="font-bold text-white dark:text-black">Pesquisar</span>
      </button>
    </div>
  );
}
