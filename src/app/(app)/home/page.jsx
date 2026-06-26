import Main from "@/components/home/Main";
import GridLocCards from "@/components/grids/GridLocCards";
import SearchBar from "@/components/home/SearchBar";
import FadingImage from "@/components/home/FadingImage";
import { imoveisMockadosAprovados } from "@/data/mock";

export default function Home(){
    return(
        <>
        <FadingImage/>
        <Main>
            <SearchBar/>
            <GridLocCards imoveis={imoveisMockadosAprovados}></GridLocCards>
        </Main>
        </>
    )
}