"use client"

import { useState, useRef, useEffect } from "react";
import Main from "@/components/home/Main";
import Image from "next/image";
import { faAngleUp, faAngleDown, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
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

export default function LocPageTemplate({ imovel, locador, isAdminMode = false, children }) {
    const router = useRouter();
    
    const [imagens, setImagens] = useState(["https://placehold.co/800x500/e2e8f0/475569?text=Carregando..."]);
    const [imagemPrincipal, setImagemPrincipal] = useState(imagens[0]);
    const carrosselRef = useRef(null);

    useEffect(() => {
        async function buscarFotos() {
            if (!imovel?.id) return;
            try {
                const res = await api.get(`/midia/imovel/${imovel.id}/fotos`);
                const nomesArquivos = res.data;

                if (nomesArquivos && nomesArquivos.length > 0) {
                    const urlsCompletas = nomesArquivos.map(nome => `http://localhost:8080/midia/arquivo/${nome}`);
                    setImagens(urlsCompletas);
                    setImagemPrincipal(urlsCompletas[0]); 
                } else {
                    setImagens(["https://placehold.co/800x500/e2e8f0/475569?text=Sem+Foto"]);
                    setImagemPrincipal("https://placehold.co/800x500/e2e8f0/475569?text=Sem+Foto");
                }
            } catch (error) {
                console.error("Erro ao buscar fotos:", error);
                setImagens(["https://placehold.co/800x500/e2e8f0/475569?text=Sem+Foto"]);
                setImagemPrincipal("https://placehold.co/800x500/e2e8f0/475569?text=Sem+Foto");
            }
        }
        buscarFotos();
    }, [imovel?.id]);

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

            <div className="flex flex-col lg:flex-row w-full max-w-6xl mx-auto px-4 py-8 gap-4 lg:gap-10 justify-center">
                
                <div className="w-full lg:w-[800px] shrink-0">
                    <Image 
                        className="rounded-xl object-cover w-full h-[250px] md:h-[400px] lg:h-[500px] mt-0 lg:mt-9 shadow-lg transition-all duration-300" 
                        unoptimized 
                        src={imagemPrincipal} 
                        alt="Imagem do Imóvel" 
                        width={800} 
                        height={500} 
                    />
                </div>
                
                <div className="flex flex-row lg:flex-col gap-4 mt-2 lg:mt-12 items-center w-full lg:w-auto">
                    
                    <button onClick={rolarPraCima} className="hidden lg:block hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition p-2 shrink-0">
                        <FontAwesomeIcon icon={faAngleUp} className="cursor-pointer text-[#545F71] dark:text-gray-300 w-[16px] h-[16px]"/>
                    </button>

                    <div ref={carrosselRef} className="flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-y-auto w-full lg:w-auto lg:h-[400px] p-2 [&::-webkit-scrollbar]:hidden snap-x lg:snap-y snap-mandatory scroll-smooth">
                        {imagens.map((imgSrc, index) => (
                            <div 
                                key={index}
                                onClick={() => setImagemPrincipal(imgSrc)}
                                className={`shrink-0 snap-center cursor-pointer rounded-xl transition-all duration-300 ${
                                    imagemPrincipal === imgSrc 
                                    ? "scale-105 opacity-100 ring-2 ring-[#1B3B99] dark:ring-[#819BFF] dark:ring-offset-[#1f1f25]" 
                                    : "opacity-50 hover:opacity-100 hover:scale-105"
                                }`}
                            >
                                <Image 
                                    className="rounded-xl object-cover w-[120px] h-[90px] lg:w-[200px] lg:h-[150px]" 
                                    src={imgSrc} 
                                    unoptimized 
                                    alt="Miniatura" 
                                    width={200} 
                                    height={150} 
                                />
                            </div>
                        ))}
                    </div>

                    <button onClick={rolarPraBaixo} className="hidden lg:block hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition p-2 shrink-0">
                        <FontAwesomeIcon icon={faAngleDown} className="cursor-pointer text-[#545F71] dark:text-gray-300 w-[16px] h-[16px]"/>
                    </button>
                </div>
            </div>

            <Main>
                <div className="flex flex-col lg:flex-row justify-between w-full max-w-[1150px]">
                    
                    <section className="flex flex-col w-full ml-8 lg:w-[800px] shrink-0">
                        <H1>{imovel.dadosGerais.titulo}</H1>
                        <p className="text-[#545F71] dark:text-white mt-2">{imovel.dadosGerais.descricao}</p>
                    </section>
                    
                    <div className="w-full flex justify-center mt-5 lg:w-auto lg:justify-end">
                        <LocAndLLCard imovel={imovel} locador={locador}/>
                    </div>
                </div>    

                <section className="flex flex-col mr-30">
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
                </section>
                

                {children}
            </Main>
        </>
    );
}