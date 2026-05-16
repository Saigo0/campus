import Header from "@/components/header/Header";
import Main from "@/components/home/Main";
import Footer from "@/components/footer/Footer";
import LocCard from "@/components/grids/LocCard"
import GridLocCards from "@/components/grids/GridLocCards";
import Logo from "@/components/logo/Logo";
import SearchBar from "@/components/home/SearchBar";
import SearchButton from "@/components/home/SearchButton";
import SignInButton from "@/components/home/SearchButton";
import FadingImage from "@/components/home/FadingImage";

export default function Home(){
    return(
        <>
        <Header/>
        <FadingImage/>
        
        <Main>
            <SearchBar/>
            <GridLocCards></GridLocCards>
        </Main>
        <Footer/>
        </>
    )
}