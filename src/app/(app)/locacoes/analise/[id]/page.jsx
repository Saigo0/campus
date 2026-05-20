"use client"

import { useState, useRef } from "react";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import Main from "@/components/home/Main";
import Image from "next/image";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { imoveisMockadosIndefinidos } from "@/data/mock";
import {locadorMockado} from "@/data/mock";
import {Swiper, SwiperSlide} from "react";
import H1 from "@/components/heading/H1";


export default function DetalhesAnalise() {

    const resolvedParams = useParams();

    const idUrl = resolvedParams.id;

    const imovel = imoveisMockadosIndefinidos.find((item) => item.id === parseInt(idUrl));

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
                            <p className="text-[#545F71]">{imovel.description}</p>
                        </section>
                        <div className="bg-white">
                            <div className="flex flex-row gap-5">
                                <div>
                                    <span className="text-2xl font-extrabold text-[#2A2B51]">{imovel.pricing}</span><span className="text-[#575881]">/mês</span>
                                </div>
                                <div className="bg-[#BBC7EB] rounded-2xl w-[190px] py-1 px-3 mt-1">
                                    <span className="text-[#1B3B99] font-semibold">{imovel.tipoQuarto}</span>
                                </div>
                                
                            </div>
                            <div className="flex flex-row justify-center">
                                <span className="px-4 mr-15">Taxa de condomínio</span><span className="">{imovel.taxaCondominio}</span>
                            </div>
                            <div>
                                <div>
                                    <Image src={locadorMockado[0].foto} alt={locadorMockado[0].nome} width={100} height={100}/>
                                </div>
                                <div>
                                    <span>{locadorMockado[0].nome}</span>
                                    <span>{imovel.city}</span>
                                </div>
                            </div>
                            <button className="bg-linear-to-b from-[#1B3B99] to-[#819BFF] text-white py-3 px-16 font-medium rounded-3xl text-sm">Contato</button>
                        </div>
                    </div>    
                    <section>
                        
                    </section>                
                </Main>
            </>
    )
}