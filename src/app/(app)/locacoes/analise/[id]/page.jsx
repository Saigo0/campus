"use client"

import { useState, useRef } from "react";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import Main from "@/components/home/Main";
import Image from "next/image";
import { faAngleUp, faAngleDown, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { imoveisMockadosIndefinidos } from "@/data/mock";
import {locadoresMockados} from "@/data/mock";
import {Swiper, SwiperSlide} from "react";
import H1 from "@/components/heading/H1";
import H2 from "@/components/heading/H2";
import GridLocCapac from "@/components/grids/GridLocCapac";
import LocCapacCard from "@/components/grids/LocCapacCard";
import GridLocSpecs from "@/components/grids/GridLocSpecs";
import LocSpecsCard from "@/components/grids/LocSpecsCard";
import GridAddress from "@/components/grids/GridAddress";
import LocAndLLCard from "@/components/grids/LocAndLLCard";
import SectionH2 from "@/components/heading/SectionH2";
import LocSection from "@/components/forms/LocSection";


export default function DetalhesAnalise() {

    const resolvedParams = useParams();

    const idUrl = resolvedParams.id;

    const imovel = imoveisMockadosIndefinidos.find((item) => item.id === parseInt(idUrl));

    const locador = locadoresMockados.find((item) => item.id === imovel.idLocador);

    if (!imovel) {
        return notFound();
    }

    const imagens = [imovel.img, "/images/blusa_azul.png", "/images/cabelo_vermelho.png", "/images/Cone.png", "/images/image.jpg"];

    const [imagemPrincipal, setImagemPrincipal] = useState(imagens[0]);

    const carrosselRef = useRef(null);

    const rolarPraCima = () => {
        if(carrosselRef.current){
            carrosselRef.current.scrollBy({
                top: -166,
                behavior: "smooth"
            });
        }
    };

    const rolarPraBaixo = () => {
        if(carrosselRef.current){
            carrosselRef.current.scrollBy({
                top: 166,
                behavior: "smooth"
            });
        }
    }

    return (
        <>

                <div className="flex flex-row w-full max-w-6xl mx-auto px-4 py-12 gap-10 justify-center">
                    <div>
                        <Image className="rounded-xl object-cover w-[800px] h-[500px] mt-9 shadow-lg transition-all duration-300" src={imagemPrincipal} alt={imovel.imgAlt} width={500} height={300} />
                    </div>
                    <div className="flex flex-col gap-4 mt-12">
                        <button onClick={rolarPraCima} className=" px-22 hover:bg-gray rounded-full transition">
                            <FontAwesomeIcon icon={faAngleUp} className="cursor-pointer text-[#545F71] mr-1 w-[16px] h-[16px]"/>
                        </button>

                        <div ref={carrosselRef} className="flex flex-col gap-4 overflow-y-auto h-[400px] [&::-webkit-scrollbar]:hidden snap-y snap-mandatory scroll-smooth">
                            {imagens.map((imgSrc, index) => (
                                <div 
                                    key={index}
                                    onClick={() => setImagemPrincipal(imgSrc)}
                                    className={`shrink-0 snap-center cursor-pointer border-4 rounded-xl transition-all duration-300 ${imagemPrincipal === imgSrc ? "scale-105" : "border-transparent hover:scale-105"} `}
                                >
                                    <Image className="rounded-xl object-cover shadow-lg" src={imgSrc} alt={imovel.imgAlt} width={200} height={150} />
                                </div>
                            ))}
                        </div>
                        <button onClick={rolarPraBaixo} className="px-22 hover:bg-gray rounded-full transition">
                            <FontAwesomeIcon icon={faAngleDown} className="cursor-pointer text-[#545F71] mr-1 w-[16px] h-[16px]"/>
                        </button>
                    </div>
                </div>
                <Main>
                    <div className="flex flex-row gap-8 w-[1050px]">
                        <section className="flex flex-col">
                            <H1>{imovel.title}</H1>
                            <p className="text-[#545F71] dark:text-white">{imovel.description}</p>
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
                    <section className="flex flex-row gap-15 mt-15 mb-10 ml-20">
                        <button className="bg-[#E1DFFF] text-[#004AE5] text-md hover:scale-105 font-bold px-18 py-5 rounded-full shadow-md transition">
                        Recusar
                        </button>
                        <button className="bg-linear-to-r from-[#1B3B99] to-[#819BFF] text-white text-md hover:scale-105 font-semibold px-18 py-5 rounded-full shadow-md transition">
                        Aceitar
                        </button>
                    </section>
                </Main>
            </>
    )
}