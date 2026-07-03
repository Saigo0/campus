"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { imovelService } from "@/service/imovelService";
import LocPageTemplate from "@/components/pageTemplates/LocPageTemplate";

export default function DetalhesAnalise() {
    const { id } = useParams();
    const router = useRouter();

    const [imovel, setImovel] = useState(null);
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        const userStorage = localStorage.getItem("usuarioCompleto");
        if (!userStorage) {
            router.push("/login");
            return;
        }

        const user = JSON.parse(userStorage);
        if (!user.administrador) {
            router.push("/"); 
            return;
        }

        setIsAuthorized(true);

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
    }, [id, router]);

    if (!isAuthorized) return <div className="flex justify-center py-32 font-bold text-[#1B3B99]">Verificando acesso...</div>;

    return (
        <LocPageTemplate 
            imovel={imovel} 
            locador={imovel?.locador} 
            isAdminMode={true} 
        />
    );
}