import { FaSearch } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faBed, faDog } from '@fortawesome/free-solid-svg-icons';
import ButtonForms from "../buttons/ButtonForms";
import Link from "next/link";


export default function LocCard({imovel}){
    return(
      <div className="rounded-3xl overflow-hidden shadow-xl bg-white hover:scale-101 transition">
        <div className="relative">
        <img className="rounded-t-3xl w-[400px] h-[200px] object-cover" src={imovel.img} alt={imovel.imgAlt} />

        {imovel.approvement === "Undefined" && (

          <div className="absolute top-3 right-3 flex flex-row gap-2">
            <button className="bg-[#E1DFFF] text-[#004AE5] text-xs hover:scale-105 font-bold px-5 py-2 rounded-2xl shadow-md transition">
              Recusar
            </button>
            <button className="bg-linear-to-r from-[#1B3B99] to-[#819BFF] text-white text-xs hover:scale-105 font-semibold px-6 py-2 rounded-2xl shadow-md transition">
              Aceitar
            </button>
          </div>
        )}
      </div>

      <div className="rounded-b-3xl py-4 px-4 bg-white shadow-xl">
        <div className="flex flex-row">
          <div className="mt-1 font-bold text-gray-700">
            <Link href={imovel.approvement === "Undefined" ? `/locacoes/analise/${imovel.id}` : `/home` } className="hover:underline">
              {imovel.title}
            </Link>
          </div>
          <div className="text-md font-extrabold text-blue-500 py-1 ml-auto">{imovel.pricing}</div>
        </div>

        <div className="mt-2 text-md text-gray-600">{imovel.address}</div>
        <div className="flex flex-row mt-4 mb-2">
          {imovel.icons?.map((icon, index) => (
            <div key={index} className="flex items-center mr-2 border border-black py-1 px-2 rounded-xl">
              <FontAwesomeIcon icon={icon} className="text-black mr-1 w-[16px] h-[16px]"/>
              <span className="text-xs text-black">
                {icon === faHouse ? "Casa" : icon === faBed ? "2" : icon === faDog ? "Pets" : ""}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
    )
}