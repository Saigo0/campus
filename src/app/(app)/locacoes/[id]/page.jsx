"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import LocPageTemplate from "@/components/pageTemplates/LocPageTemplate";
import { imovelService } from "@/service/imovelService";

export default function Locacao() {
    
    const { id } = useParams();
    
        const [imovel, setImovel] = useState(null);
    
        useEffect(() => {
            async function carregarImovel() {
                try {
                    const dados = await imovelService.buscarPorId(id);
                    setImovel(dados);
                } catch (error) {
                    console.error("Erro ao buscar detalhes do imóvel", error);
                }
            }
            
            if (id) {
                carregarImovel();
            }
        }, [id]);
    
    return (
        <>
           <LocPageTemplate imovel={imovel} locador={imovel?.locador}></LocPageTemplate>        
        </>
    )
}