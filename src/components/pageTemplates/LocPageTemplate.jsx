"use client"

import { useState, useRef } from "react";
import Main from "@/components/home/Main";
import Image from "next/image";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import H1 from "@/components/heading/H1";
import GridLocCapac from "@/components/grids/GridLocCapac";
import GridLocSpecs from "@/components/grids/GridLocSpecs";
import GridAddress from "@/components/grids/GridAddress";
import LocAndLLCard from "@/components/grids/LocAndLLCard";
import SectionH2 from "@/components/heading/SectionH2";
import LocSection from "@/components/forms/LocSection";
import api from "@/app/utils/api";
import { useRouter } from "next/navigation";

export default function LocPageTemplate({ imovel, locador, imagens = [], isAdminMode = false, children }) {
    const router = useRouter();

    
    
    const [imagemPrincipal, setImagemPrincipal] = useState(imagens[0] || "https://via.placeholder.com/800x500");
    const carrosselRef = useRef(null);

    const rolarPraCima = () => {
        if(carrosselRef.current) carrosselRef.current.scrollBy({ top: -166, behavior: "smooth" });
    };

    const rolarPraBaixo = () => {
        if(carrosselRef.current) carrosselRef.current.scrollBy({ top: 166, behavior: "smooth" });
    }

    const handleAprovar = async () => {
        try {
            await api.put(`/imoveis/aprovar/${imovel.id}`);
            alert("Imóvel aprovado com sucesso!");
            router.push("/locacoes/analise");
        } catch (err) {
            alert("Erro ao aprovar o imóvel.");
        }
    };

    if (!imovel) {
        return (
            <div className="flex flex-col items-center justify-center py-32 text-[#1B3B99]">
                <h2 className="text-2xl font-bold">Carregando informações do imóvel...</h2>
            </div>
        );
    }

    return (
        <>
            {isAdminMode && (
                <div className="flex justify-end max-w-6xl mx-auto px-4 mt-8">
                    <div className="flex gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
                        <button className="bg-[#E1DFFF] text-[#004AE5] font-bold px-6 py-2 rounded-xl hover:scale-105 transition">
                            Recusar
                        </button>
                        <button onClick={handleAprovar} className="bg-gradient-to-r from-[#1B3B99] to-[#819BFF] text-white font-bold px-6 py-2 rounded-xl hover:scale-105 transition">
                            Aceitar
                        </button>
                    </div>
                </div>
            )}

            <div className="flex flex-row w-full max-w-6xl mx-auto px-4 py-8 gap-10 justify-center">
                <div>
                    <Image className="rounded-xl object-cover w-[800px] h-[500px] mt-9 shadow-lg transition-all duration-300" src={imagemPrincipal} alt="Imagem do Imóvel" width={800} height={500} />
                </div>
                
                <div className="flex flex-col gap-4 mt-12">
                    <button onClick={rolarPraCima} className="hover:bg-gray-100 rounded-full transition p-2">
                        <FontAwesomeIcon icon={faAngleUp} className="cursor-pointer text-[#545F71] w-[16px] h-[16px]"/>
                    </button>

                    <div ref={carrosselRef} className="flex flex-col gap-4 overflow-y-auto h-[400px] [&::-webkit-scrollbar]:hidden snap-y snap-mandatory scroll-smooth">
                        {imagens.map((imgSrc, index) => (
                            <div 
                                key={index}
                                onClick={() => setImagemPrincipal(imgSrc)}
                                className={`shrink-0 snap-center cursor-pointer border-4 rounded-xl transition-all duration-300 ${imagemPrincipal === imgSrc ? "scale-105 border-blue-500" : "border-transparent hover:scale-105"} `}
                            >
                                <Image className="rounded-xl object-cover shadow-lg" src={imgSrc} alt="Miniatura" width={200} height={150} />
                            </div>
                        ))}
                    </div>

                    <button onClick={rolarPraBaixo} className="hover:bg-gray-100 rounded-full transition p-2">
                        <FontAwesomeIcon icon={faAngleDown} className="cursor-pointer text-[#545F71] w-[16px] h-[16px]"/>
                    </button>
                </div>
            </div>

            <Main>
                <div className="flex flex-row justify-between gap-8 w-full max-w-[1150px]">
                    <section className="flex flex-col w-[800px] shrink-0">
                        <H1>{imovel.dadosGerais.titulo}</H1>
                        <p className="text-[#545F71] dark:text-white mt-2">{imovel.dadosGerais.descricao}</p>
                    </section>
                    <LocAndLLCard imovel={imovel} locador={locador}/>
                </div>    

                <LocSection>
                    <SectionH2>Endereço</SectionH2>
                    <GridAddress imovel={imovel}></GridAddress>
                </LocSection>

                <LocSection>
                    <SectionH2>Capacidade do imóvel</SectionH2>
                    <GridLocCapac imovel={imovel}/>
                </LocSection>

                <LocSection>
                    <SectionH2>Especificações do imóvel</SectionH2>
                    <GridLocSpecs imovel={imovel}/>
                </LocSection>

                {children}
            </Main>
        </>
    );
}