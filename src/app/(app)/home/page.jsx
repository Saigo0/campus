"use client"; 

import { useEffect, useState } from "react";
import Main from "@/components/home/Main";
import GridLocCards from "@/components/grids/GridLocCards";
import SearchBar from "@/components/home/SearchBar";
import FadingImage from "@/components/home/FadingImage";
import { imovelService } from "@/service/imovelService";

export default function Home() {

    const [todosImoveis, setTodosImoveis] = useState([]); 
    const [termoPesquisa, setTermoPesquisa] = useState(""); 
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        async function buscarDadosDaApi() {
            try {
                const dados = await imovelService.listarTodos();
                const aprovados = dados.filter(imovel => imovel.aprovado === true);
                setTodosImoveis(aprovados); 
            } catch (erro) {
                console.error("Erro ao buscar os imóveis do servidor:", erro);
            } finally {
                setCarregando(false);
            }
        }
        buscarDadosDaApi();
    }, []);

    const imoveisFiltrados = todosImoveis.filter((imovel) => {
        if (termoPesquisa === "") return true; 

        const termo = termoPesquisa.toLowerCase();
        const titulo = imovel.dadosGerais?.titulo?.toLowerCase() || "";
        const cidade = imovel.endereco?.cidade?.toLowerCase() || "";
        const bairro = imovel.endereco?.bairro?.toLowerCase() || "";

        return titulo.includes(termo) || cidade.includes(termo) || bairro.includes(termo);
    });

    return (
        <>
            <FadingImage />
            <Main>
                <SearchBar 
                    termoPesquisa={termoPesquisa} 
                    setTermoPesquisa={setTermoPesquisa} 
                />

                {carregando ? (
                    <div style={{ textAlign: "center", padding: "2rem" }}>
                        Carregando imóveis...
                    </div>
                ) : imoveisFiltrados.length > 0 ? (
                    <GridLocCards imoveis={imoveisFiltrados} showAdminButtons={false} />
                ) : (
                    <div className="flex flex-col items-center justify-center py-20 text-[#545F71] dark:text-gray-400">
                        <span className="text-xl font-semibold mb-2">Nenhum imóvel encontrado.</span>
                        <span>Não achamos resultados para "{termoPesquisa}". Tente buscar por outra cidade ou bairro.</span>
                    </div>
                )}
            </Main>
        </>
    );
}