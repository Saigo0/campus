"use client" 

import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faWhatsapp } from "@fortawesome/free-solid-svg-icons"; 

export default function LocAndLLCard({ imovel, locador }) {
    const valorAluguel = imovel?.dadosGerais?.valorAluguel ? `R$ ${imovel.dadosGerais.valorAluguel.toFixed(2)}` : "Sob consulta";
    const valorCondominio = imovel?.dadosGerais?.valorCondominio ? `R$ ${imovel.dadosGerais.valorCondominio.toFixed(2)}` : "Não possui";
    const tipoQuarto = imovel?.especificacoes?.tipoQuarto || "Padrão";
    const cidade = imovel?.endereco?.cidade || "Cidade não informada";
    const nomeLocador = locador?.nome || "Locador Indisponível";

    const [fotoComErro, setFotoComErro] = useState(false);

    const urlFotoLocador = locador?.id ? `http://localhost:8080/midia/usuario/${locador.id}/foto` : null;

    const telefoneLimpo = locador?.telefone ? locador.telefone.replace(/\D/g, '') : '';
    
    const telefoneWhatsApp = telefoneLimpo ? `55${telefoneLimpo}` : '';

    const textoMensagem = encodeURIComponent(`Olá, ${nomeLocador}! Tenho interesse no imóvel "${imovel?.dadosGerais?.titulo || 'anunciado'}" e gostaria de obter mais informações.`);
    
    const linkWhatsApp = `https://wa.me/${telefoneWhatsApp}?text=${textoMensagem}`;

    return (
        <div className="bg-white dark:bg-[#1f1f25] p-7 rounded-3xl w-[330px] lg:w-[350px] shrink-0 flex flex-col gap-5 shadow-sm border border-gray-100 dark:border-gray-800">
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
                <span className="text-[#2A2B51] dark:text-white ml-10 font-bold">{valorCondominio}</span>
            </div>
            <div><button className="bg-[#F8F5FF] h-[1px] w-full"></button></div>
            
            <div className="bg-[#F2EFFF] dark:bg-[#2e2e44] p-4 rounded-4xl flex flex-row gap-4 items-center">
                
                <div className="rounded-full overflow-hidden w-[50px] h-[50px] shrink-0 flex justify-center items-center">
                    {urlFotoLocador && !fotoComErro ? (
                        <Image 
                            className="object-cover w-full h-full" 
                            src={urlFotoLocador} 
                            alt={nomeLocador} 
                            width={50} 
                            height={50}
                            unoptimized
                            onError={() => setFotoComErro(true)}
                        />
                    ) : (
                        <FontAwesomeIcon 
                            icon={faCircleUser} 
                            className="text-[50px] text-[#9D9DB5] dark:text-gray-300" 
                        />
                    )}
                </div> 

                <div className="flex flex-col">
                    <span className="text-[#2A2B51] dark:text-white font-semibold">{nomeLocador}</span>
                    <span className="text-[#575881] dark:text-white text-sm">{cidade}</span>
                </div>
            </div>
            
            {telefoneWhatsApp ? (
                <a 
                    href={linkWhatsApp}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gradient-to-b from-[#1B3B99] dark:from-[#b6c4ff] dark:text-black to-[#819BFF] text-white py-3 px-16 font-medium rounded-3xl text-sm text-center block w-full hover:scale-105 transition-transform"
                >
                    Contato
                </a>
            ) : (
                <button disabled className="bg-gray-300 text-gray-500 py-3 px-16 font-medium rounded-3xl text-sm w-full cursor-not-allowed text-center">
                    Contato Indisponível
                </button>
            )}
        </div>
    );
}