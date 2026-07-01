import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function BlueAddressCard({ imovel }) {

    const end = imovel?.endereco;

    return (
        <div className="bg-[#E1DFFF] dark:bg-[#2e2e44] p-7 rounded-3xl w-full flex flex-col gap-5 shadow-sm">
            <div className="flex flex-col">
                <span className="text-[#9D9DB5] dark:text-gray-400 text-xs font-bold">CIDADE</span>
                <span className="text-[#2A2B51] dark:text-white font-bold text-lg">
                    {end?.cidade || "Não informada"}
                </span>
            </div>
            <div className="flex flex-col">
                <span className="text-[#9D9DB5] dark:text-gray-400 text-xs font-bold">CEP</span>
                <span className="text-[#2A2B51] dark:text-white font-bold text-lg">
                    {end?.cep || "00000-000"}
                </span> 
            </div>
            
            {end?.distanciaCeavi > 0 && (
                <div className="text-[#004AE5] dark:text-[#819BFF] font-bold text-md mt-3">
                    <span> 
                        <FontAwesomeIcon icon={faLocationDot} className="mr-2 w-[16px] h-[16px]"/>
                        A {end.distanciaCeavi} metros do portão do campus
                    </span>
                </div>
            )}
        </div>
    );
}