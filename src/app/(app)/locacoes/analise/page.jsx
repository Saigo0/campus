"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import GridLocCards from "@/components/grids/GridLocCards";
import Main from "@/components/home/Main";
import H1 from "@/components/heading/H1";
import { imovelService } from "@/service/imovelService";

export default function Analise() {
    const [pendentes, setPendentes] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [isAuthorized, setIsAuthorized] = useState(false);
    const router = useRouter();

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

        async function buscarDados() {
            try {
                const dados = await imovelService.listarTodos();
                const aguardando = dados.filter(imovel => !imovel.aprovado);
                setPendentes(aguardando);
            } catch (erro) {
                console.error("Erro ao buscar imóveis para análise:", erro);
            } finally {
                setCarregando(false);
            }
        }
        buscarDados();
    }, [router]);

    if (!isAuthorized) return <div className="flex justify-center py-32 font-bold text-[#1B3B99]">Verificando acesso...</div>;

    return (
        <div className="flex flex-col w-full max-w-6xl mx-auto px-4 mt-8">
            <div className="flex flex-col mb-6 ml-4">
                <H1>Formulários para Análise</H1>
                <p className="text-[#575881] dark:text-gray-300 font-semibold">
                    {carregando ? "Carregando solicitações..." : `Há ${pendentes.length} imóveis aguardando pela liberação da análise`}
                </p>
            </div>

            <Main>
                {!carregando && (
                    <GridLocCards imoveis={pendentes} showAdminButtons={true} />
                )}
            </Main>
        </div>
    );
}