import GridLocCards from "@/components/grids/GridLocCards";
import Main from "@/components/home/Main";
import H1 from "@/components/heading/H1";

import { imoveisMockadosIndefinidos } from "@/data/mock";

export default function Analise(){
    return(
        <>
        <div className="flex flex-col w-full max-w-6xl mx-auto px-4">
            <div className="flex flex-col mb-2 ml-35">
                <H1>Formulários para Análise</H1>
                <p className="text-[#575881] dark:text-white font-semibold">Há 4 imóveis aguardando pela liberação da análise</p>
            </div>

            <Main>
                <GridLocCards imoveis={imoveisMockadosIndefinidos}></GridLocCards>
            </Main>
        </div>
        </>
    )
}