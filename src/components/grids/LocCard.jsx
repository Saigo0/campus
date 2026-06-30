"use client"; 

import { useState, useEffect } from "react";
import LocIcons from "./LocIcons";
import Link from "next/link";
import api from "@/app/utils/api"; 

export default function LocCard({ imovel, showAdminButtons = false }) {
  const [imagemCapa, setImagemCapa] = useState("https://via.placeholder.com/400x200?text=Carregando...");

  useEffect(() => {
    async function buscarFoto() {
      try {
        const res = await api.get(`/midia/imovel/${imovel.id}/fotos`);
        if (res.data && res.data.length > 0) {
          setImagemCapa(`http://localhost:8080/midia/arquivo/${res.data[0]}`);
        } else {
          setImagemCapa("https://placehold.co/400x200/e2e8f0/475569?text=Sem+Foto");
        }
      } catch (error) {
        setImagemCapa("https://placehold.co/400x200/e2e8f0/475569?text=Sem+Foto");
      }
    }
    buscarFoto();
  }, [imovel.id]);

  const handleAprovar = async (e) => {
    e.preventDefault(); 
    try {
      await api.put(`/imoveis/aprovar/${imovel.id}`);
      alert("Imóvel aprovado com sucesso!");
      window.location.reload(); 
    } catch (err) {
      alert("Erro ao aprovar o imóvel.");
    }
  };

  const handleRecusar = async (e) => {
    e.preventDefault();
    alert("Função de exclusão/recusa a ser implementada!");
  };

  const titulo = imovel?.dadosGerais?.titulo || "Imóvel sem título";
  const preco = imovel?.dadosGerais?.valorAluguel ? `R$ ${imovel.dadosGerais.valorAluguel.toFixed(2)}` : "Preço sob consulta";
  const enderecoCompleto = imovel?.endereco ? `${imovel.endereco.rua}, ${imovel.endereco.numero} - ${imovel.endereco.bairro}` : "Endereço não informado";

  const targetUrl = showAdminButtons ? `/locacoes/analise/${imovel.id}` : `/locacoes/${imovel.id}`;

  return (
    <Link href={targetUrl} className="block w-full">
      <div className="rounded-3xl w-full h-full overflow-hidden shadow-xl bg-white hover:scale-[1.02] transition-transform duration-300 flex flex-col">
        
        <div className="relative w-full">
          <img 
            className="rounded-t-3xl w-full h-[200px] object-cover bg-gray-200" 
            src={imagemCapa} 
            alt={titulo} 
          />

          {showAdminButtons && (
            <div className="absolute top-3 right-3 flex flex-row gap-2 z-10">
              <button 
                onClick={handleRecusar} 
                className="bg-[#E1DFFF] text-[#004AE5] text-xs hover:scale-105 font-bold px-4 py-2 rounded-2xl shadow-md transition"
              >
                Recusar
              </button>
              <button 
                onClick={handleAprovar} 
                className="bg-gradient-to-r from-[#1B3B99] to-[#819BFF] text-white text-xs hover:scale-105 font-semibold px-5 py-2 rounded-2xl shadow-md transition"
              >
                Aceitar
              </button>
            </div>
          )}
        </div>

        <div className="flex-1 flex flex-col rounded-b-3xl py-4 px-4 dark:bg-[#1f1f25] bg-white shadow-xl border-t dark:border-gray-800">
          <div className="flex flex-row justify-between items-start gap-2">
            <div className="mt-1 font-bold text-gray-700 dark:text-white line-clamp-2">
              {titulo}
            </div>
            <div className="text-md font-extrabold text-blue-500 dark:text-[#819BFF] py-1 whitespace-nowrap">
              {preco}
            </div>
          </div>
          <div className="mt-2 text-md text-gray-600 dark:text-gray-300 flex flex-wrap">
            {enderecoCompleto}
          </div>
          <LocIcons especificacoes={imovel?.especificacoes} comodidades={imovel?.comodidades} />
        </div>
      </div>
    </Link>
  );
}