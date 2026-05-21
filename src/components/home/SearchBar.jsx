import Image from "next/image";

export default function SearchBar(){
    return(
        <div className="bg-white mx-10 rounded-4xl py-4 px-6 flex flex-row items-center justify-center shadow-lg gap-10">
            <div className="flex flex-col">
                <span className="text-[#A29F9F] text-md">LOCALIZAÇÃO</span>
                <span className="text-[#545F71]">Onde pretende morar?</span>
            </div>
            <div className="flex flex-col">
                <span className="text-[#A29F9F] text-md">FILTRAGEM</span>
                <span className="text-[#545F71]">Quais as características do imóvel ou do contrato?</span>
            </div>
            <button className="py-3 px-5 flex flex-row items-center justify-center bg-linear-to-r from-[#1B3B99] to-[#819BFF] rounded-3xl gap-4 hover:scale-102 transition"><Image src="/images/search.png" alt="Lupa" width={16} height={12}/><span className="font-bold text-white">Pesquisar</span></button>
        </div>
    )
}