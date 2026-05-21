"use client"

import { useState, useRef } from "react";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import Main from "@/components/home/Main";
import Image from "next/image";
import { faAngleUp, faAngleDown, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { imoveisMockadosIndefinidos } from "@/data/mock";
import {locadorMockado} from "@/data/mock";
import {Swiper, SwiperSlide} from "react";
import H1 from "@/components/heading/H1";
import H2 from "@/components/heading/H2";


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
                        <div className="bg-white p-7 rounded-3xl mt-8 w-full flex flex-col gap-5">
                            <div className="flex flex-row gap-5">
                                <div>
                                    <span className="text-2xl font-extrabold text-[#2A2B51]">{imovel.pricing}</span><span className="text-[#575881]">/mês</span>
                                </div>
                                <div className="bg-[#BBC7EB] rounded-2xl items-center px-2 mt-1">
                                    <span className="text-[#1B3B99] font-semibold text-xs">{imovel.tipoQuarto}</span>
                                </div>
                            </div>
                            <div className="flex flex-row">
                                <span className="text-[#575881]">Taxa de condomínio</span><span className="text-[#2A2B51] ml-20 font-bold">{imovel.taxaCondominio}</span>
                            </div>
                            <div><button className="bg-[#F8F5FF] h-[1px] w-full"></button></div>
                            <div className="bg-[#F2EFFF] p-4 rounded-4xl flex flex-row gap-4">
                                <div className="rounded-full overflow-hidden w-[50px] h-[50px] shrink-0">
                                    <Image className="object-cover w-full h-full" src={locadorMockado[0].foto} alt={locadorMockado[0].nome} width={50} height={50}/>
                                </div> 
                                <div className="flex flex-col">
                                    <span className="text-[#2A2B51] font-semibold">{locadorMockado[0].nome}</span>
                                    <span className="text-[#575881] text-sm">{imovel.city}</span>
                                </div>
                            </div>
                            <button className="bg-linear-to-b from-[#1B3B99] to-[#819BFF] text-white py-3 px-16 font-medium rounded-3xl text-sm">Contato</button>
                        </div>
                    </div>    
                    <section className="flex flex-col gap-4 w-[1050px] mt-8">
                        <h2 className="text-[#545F71] font-extrabold text-2xl">Endereço</h2>
                        <div className="flex flex-row gap-8 w-[800px]">
                            <div className="bg-white p-7 rounded-3xl w-full flex flex-col gap-5">
                                <div className="flex flex-col">
                                    <span className="text-[#9D9DB5] text-xs font-bold">RUA</span>
                                    <span className="text-[#2A2B51] font-bold text-lg">{imovel.rua}</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[#9D9DB5] text-xs font-bold">BAIRRO</span>
                                    <span className="text-[#2A2B51] font-bold text-lg">{imovel.bairro}</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[#9D9DB5] text-xs font-bold">NÚMERO</span>
                                    <span className="text-[#2A2B51] font-bold text-lg">{imovel.numero}</span>
                                </div>
                            </div>
                            <div className="bg-[#E1DFFF] p-7  rounded-3xl w-full flex flex-col gap-5">
                                <div className="flex flex-col">
                                    <span className="text-[#9D9DB5] text-xs font-bold">CIDADE</span>
                                    <span className="text-[#2A2B51] font-bold text-lg">{imovel.city}</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[#9D9DB5] text-xs font-bold">CEP</span>
                                    <span className="text-[#2A2B51] font-bold text-lg">{imovel.cep}</span> 
                                </div>
                                <div className="text-[#004AE5] font-bold text-md mt-3">
                                    <span> <FontAwesomeIcon icon={faLocationDot} className="mr-1 w-[16px] h-[16px]"/>{imovel.distance} do portão do campus</span>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="flex flex-col gap-4 w-[1050px] mt-8">
                        <h2 className="text-[#545F71] font-bold text-2xl">Capacidade do imóvel</h2>
                        <div className="grid grid-cols-3 gap-7 w-[800px]">
                            <div className="bg-white flex flex-col rounded-3xl items-center py-6 px-28 gap-3 shadow-sm">
                                <FontAwesomeIcon icon={imovel.icons[1]} className="mr-1 w-[16px] h-[16px] text-[#004AE5]"/>
                                <span className="text-[#2A2B51]">2</span>
                            </div>
                            <div className="bg-white flex flex-col rounded-3xl items-center py-6 px-28 gap-3 shadow-sm">
                                <FontAwesomeIcon icon={imovel.icons[3]} className="mr-1 w-[16px] h-[16px] text-[#004AE5]"/>
                                <span className="text-[#2A2B51]">1</span>
                            </div>
                            <div className="bg-white flex flex-col rounded-3xl items-center py-6 px-26 gap-3 shadow-sm">
                                <FontAwesomeIcon icon={imovel.icons[4]} className="mr-1 w-[16px] h-[16px] text-[#004AE5]"/>
                                <span className="text-[#2A2B51]">40m²</span>
                            </div>
                        </div>
                    </section>
                    <section className="flex flex-col gap-4 w-[1050px] mt-8">
                        <h2 className="text-[#545F71] font-bold text-2xl">Especificações do imóvel</h2>
                        <div className="grid grid-cols-4 gap-7 w-[800px]">
                            <div className="bg-white flex flex-col rounded-4xl items-center py-6 gap-3 shadow-sm text-center">
                                <FontAwesomeIcon icon={imovel.icons[12]} className="mr-1 w-[16px] h-[16px] text-[#004AE5]"/>
                                <span className="text-[#2A2B51]">Internet inclusa</span>
                            </div>
                            <div className="bg-white flex flex-col rounded-4xl items-center py-6 gap-3 shadow-sm text-center">
                                <FontAwesomeIcon icon={imovel.icons[5]} className="mr-1 w-[16px] h-[16px] text-[#004AE5]"/>
                                <span className="text-[#2A2B51]">Apenas mulheres</span>
                            </div>
                            <div className="bg-white flex flex-col rounded-4xl items-center py-6 gap-3 shadow-sm text-center">
                                <FontAwesomeIcon icon={imovel.icons[6]} className="mr-1 w-[16px] h-[16px] text-[#004AE5]"/>
                                <span className="text-[#2A2B51]">Luz inclusa</span>
                            </div>
                            <div className="bg-white flex flex-col rounded-4xl items-center py-6 gap-3 shadow-sm text-center">
                                <FontAwesomeIcon icon={imovel.icons[7]} className="mr-1 w-[16px] h-[16px] text-[#004AE5]"/>
                                <span className="text-[#2A2B51]">Água inclusa</span>
                            </div>
                            <div className="bg-white flex flex-col rounded-4xl items-center py-6 gap-3 shadow-sm text-center">
                                <FontAwesomeIcon icon={imovel.icons[8]} className="mr-1 w-[16px] h-[16px] text-[#004AE5]"/>
                                <span className="text-[#2A2B51]">Elevador</span>
                            </div>
                            <div className="bg-white flex flex-col rounded-4xl items-center py-6 gap-3 shadow-sm text-center">
                                <FontAwesomeIcon icon={imovel.icons[9]} className="mr-1 w-[16px] h-[16px] text-[#004AE5]"/>
                                <span className="text-[#2A2B51]">Escada</span>
                            </div>
                            <div className="bg-white flex flex-col rounded-4xl items-center py-6 gap-3 shadow-sm text-center">
                                <FontAwesomeIcon icon={imovel.icons[11]} className="mr-1 w-[16px] h-[16px] text-[#004AE5]"/>
                                <span className="text-[#2A2B51]">Área de lazer</span>
                            </div>
                            <div className="bg-white flex flex-col rounded-4xl items-center py-6 gap-3 shadow-sm text-center">
                                <FontAwesomeIcon icon={imovel.icons[10]} className="mr-1 w-[16px] h-[16px] text-[#004AE5]"/>
                                <span className="text-[#2A2B51]">Garagem</span>
                            </div>
                        </div>
                    </section>
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