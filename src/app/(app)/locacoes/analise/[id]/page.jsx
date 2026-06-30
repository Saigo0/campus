"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { imovelService } from "@/service/imovelService";
import LocPageTemplate from "@/components/pageTemplates/LocPageTemplate";

export default function DetalhesAnalise() {

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
        <LocPageTemplate 
            imovel={imovel} 
            locador={imovel?.locador} 
            isAdminMode={true} 
        />
    );
}