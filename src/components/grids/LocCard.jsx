import LocIcons from "./LocIcons";
import Link from "next/link";

export default function LocCard({imovel}){
    return(

      <Link href={imovel.approvement === "Undefined" ? `/locacoes/analise/${imovel.id}` : `/locacoes/${imovel.id}`} className="block w-full">

        <div className="rounded-3xl w-full h-full overflow-hidden shadow-xl bg-white hover:scale-[1.02] transition-transform duration-300 flex flex-col">
          
          <div className="relative w-full">
            <img className="rounded-t-3xl w-full h-[200px] object-cover" src={imovel.img} alt={imovel.imgAlt} />

            {imovel.approvement === "Undefined" && (
              <div className="absolute top-3 right-3 flex flex-row gap-2">
                <button className="bg-[#E1DFFF] text-[#004AE5] text-xs hover:scale-105 font-bold px-4 py-2 rounded-2xl shadow-md transition">
                  Recusar
                </button>
                <button className="bg-gradient-to-r from-[#1B3B99] to-[#819BFF] text-white text-xs hover:scale-105 font-semibold px-5 py-2 rounded-2xl shadow-md transition">
                  Aceitar
                </button>
              </div>
            )}
          </div>

          <div className="flex-1 flex flex-col rounded-b-3xl py-4 px-4 dark:bg-[#1f1f25] bg-white shadow-xl border-t dark:border-gray-800">
            
            <div className="flex flex-row justify-between items-start gap-2">
              <div className="mt-1 font-bold text-gray-700 dark:text-white line-clamp-2">
                {imovel.title}
              </div>
              <div className="text-md font-extrabold text-blue-500 dark:text-[#819BFF] py-1 whitespace-nowrap">
                {imovel.pricing}
              </div>
            </div>

            <div className="mt-2 text-md text-gray-600 dark:text-gray-300 flex flex-wrap">
              {imovel.address}
            </div>
            
            <LocIcons icons={imovel.homeIcons}/>
            
          </div>
        </div>
      </Link>
    )
}