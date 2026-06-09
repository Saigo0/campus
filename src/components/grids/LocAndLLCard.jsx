import Image from "next/image";

export default function LocAndLLCard({imovel, locador}){
    return (
        <div className="bg-white dark:bg-[#1f1f25] p-7 rounded-3xl mt-8 w-full flex flex-col gap-5">
            <div className="flex flex-row gap-5">
                <div>
                    <span className="text-2xl font-extrabold text-[#2A2B51] dark:text-white">{imovel.pricing}</span><span className="text-[#575881] dark:text-white">/mês</span>
                </div>
                <div className="bg-[#BBC7EB] rounded-2xl items-center px-2 mt-1">
                    <span className="text-[#1B3B99] dark:text-white font-semibold text-xs">{imovel.tipoQuarto}</span>
                </div>
            </div>
            <div className="flex flex-row">
                <span className="text-[#575881] dark:text-white">Taxa de condomínio</span><span className="text-[#2A2B51] dark:text-white ml-20 font-bold">{imovel.taxaCondominio}</span>
            </div>
            <div><button className="bg-[#F8F5FF] h-[1px] w-full"></button></div>
            <div className="bg-[#F2EFFF] dark:bg-[#2e2e44] p-4 rounded-4xl flex flex-row gap-4">
                <div className="rounded-full overflow-hidden w-[50px] h-[50px] shrink-0">
                    <Image className="object-cover w-full h-full" src={locador.foto} alt={locador.nome} width={50} height={50}/>
                </div> 
                <div className="flex flex-col">
                    <span className="text-[#2A2B51] dark:text-white font-semibold">{locador.nome}</span>
                    <span className="text-[#575881] dark:text-white text-sm">{imovel.city}</span>
                </div>
            </div>
            <button className="bg-linear-to-b from-[#1B3B99] dark:from-[#b6c4ff] dark:text-black to-[#819BFF] text-white py-3 px-16 font-medium rounded-3xl text-sm">Contato</button>
        </div>
    );
}