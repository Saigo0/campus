"use client"; 

import { useEffect, useState } from "react";
import Main from "@/components/home/Main";
import GridLocCards from "@/components/grids/GridLocCards";
import SearchBar from "@/components/home/SearchBar";
import FadingImage from "@/components/home/FadingImage";
import { imovelService } from "@/service/imovelService";

export default function Home() {
    const [imoveis, setImoveis] = useState([]);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        async function buscarDadosDaApi() {
            try {
                const dados = await imovelService.listarTodos();
                const aprovados = dados.filter(imovel => imovel.aprovado === true);
                setImoveis(aprovados); 
            } catch (erro) {
                console.error("Erro ao buscar os imóveis do servidor:", erro);
            } finally {
                setCarregando(false);
            }
        }
        buscarDadosDaApi();
    }, []);

    return (
        <>
            <FadingImage />
            <Main>
                <SearchBar />
                {carregando ? (
                    <div style={{ textAlign: "center", padding: "2rem" }}>
                        Carregando imóveis...
                    </div>
                ) : (
                    <GridLocCards imoveis={imoveis} showAdminButtons={false} />
                )}
            </Main>
        </>
    );
}