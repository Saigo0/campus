import Image from "next/image";

export default function LocAndLLCard({ imovel, locador }) {
    // 1. Mapeamento dos dados reais da API com fallback
    const valorAluguel = imovel?.dadosGerais?.valorAluguel ? `R$ ${imovel.dadosGerais.valorAluguel.toFixed(2)}` : "Sob consulta";
    const valorCondominio = imovel?.dadosGerais?.valorCondominio ? `R$ ${imovel.dadosGerais.valorCondominio.toFixed(2)}` : "Não informado";
    const tipoQuarto = imovel?.especificacoes?.tipoQuarto || "Padrão";
    const cidade = imovel?.endereco?.cidade || "Cidade não informada";

    const fotoPerfil = locador?.foto || "https://placehold.co/50x50/e2e8f0/475569?text=Perfil";
    const nomeLocador = locador?.nome || "Locador Indisponível";

    return (
        <div className="bg-white dark:bg-[#1f1f25] p-7 rounded-3xl w-[320px] shrink-0 flex flex-col gap-5 shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="flex flex-row gap-5">
                <div>
                    <span className="text-2xl font-extrabold text-[#2A2B51] dark:text-white">{valorAluguel}</span>
                    <span className="text-[#575881] dark:text-white">/mês</span>
                </div>
                <div className="bg-[#BBC7EB] rounded-2xl flex items-center px-2 mt-1">
                    <span className="text-[#1B3B99] dark:text-white font-semibold text-xs">{tipoQuarto}</span>
                </div>
            </div>
            <div className="flex flex-row">
                <span className="text-[#575881] dark:text-white">Taxa de condomínio</span>
                <span className="text-[#2A2B51] dark:text-white ml-20 font-bold">{valorCondominio}</span>
            </div>
            <div><button className="bg-[#F8F5FF] h-[1px] w-full"></button></div>
            
            <div className="bg-[#F2EFFF] dark:bg-[#2e2e44] p-4 rounded-4xl flex flex-row gap-4">
                <div className="rounded-full overflow-hidden w-[50px] h-[50px] shrink-0">
                    <Image className="object-cover w-full h-full" src={fotoPerfil} alt={nomeLocador} width={50} height={50}/>
                </div> 
                <div className="flex flex-col">
                    <span className="text-[#2A2B51] dark:text-white font-semibold">{nomeLocador}</span>
                    <span className="text-[#575881] dark:text-white text-sm">{cidade}</span>
                </div>
            </div>
            
            <button className="bg-gradient-to-b from-[#1B3B99] dark:from-[#b6c4ff] dark:text-black to-[#819BFF] text-white py-3 px-16 font-medium rounded-3xl text-sm">
                Contato
            </button>
        </div>
    );
}