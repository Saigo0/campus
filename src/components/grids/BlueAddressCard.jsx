import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function BlueAddressCard({ imovel }) {
    return (
        <div className="bg-[#E1DFFF] dark:bg-[#2e2e44] p-7  rounded-3xl w-full flex flex-col gap-5">
            <div className="flex flex-col">
                <span className="text-[#9D9DB5] dark:text-white text-xs font-bold">CIDADE</span>
                <span className="text-[#2A2B51] dark:text-white font-bold text-lg">{imovel.city}</span>
            </div>
            <div className="flex flex-col">
                <span className="text-[#9D9DB5] dark:text-white text-xs font-bold">CEP</span>
                <span className="text-[#2A2B51] dark:text-white font-bold text-lg">{imovel.cep}</span> 
            </div>
            <div className="text-[#004AE5] dark:text-white font-bold text-md mt-3">
                <span> <FontAwesomeIcon icon={faLocationDot} className="mr-1 w-[16px] h-[16px]"/>{imovel.distance} do portão do campus</span>
            </div>
        </div>
    );
}