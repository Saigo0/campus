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

import {
  faHouse,
  faBuilding,
  faRestroom,
  faBed,
  faWarehouse,
  faUser,
  faUsersRays,
  faHomeUser,
  faInfo,
  faMoneyBill,
  faAddressBook,
  faAddressCard,
  faDog,
  faSwimmingPool,
  faParking,
  faElevator,
  faGripLinesVertical,
  faWifi,
  faDroplet,
  faFireFlameSimple,
  faBolt,
  faStairs,
  faVenus,
  faMars,
  faUserGroup,
  faUsers,
  faDumbbell,
  faFireBurner,
  faGamepad,
  faDoorOpen,
} from "@fortawesome/free-solid-svg-icons";

const imoveisMockados = [
    {
        id: 1,
        img: "/images/mark.jpeg",
        imgAlt: "Foto do imóvel",
        description: "Rua Getúlio Vargas, n° 160, Bela Vista",
        title: "Casa em Ibirama",
        pricing: "R$900,00",
        url: "",
        icons: [faHouse, faBed, faDog]
    },
    {
        id: 2,
        img: "/images/mark.jpeg",
        imgAlt: "Foto do imóvel",
        description: "Rua Getúlio Vargas, n° 160, Bela Vista",
        title: "Casa em Ibirama",
        pricing: "R$1.100,00",
        url: "",
        icons: [faHouse, faBed, faDog]
    },
    {
        id: 3,
        img: "/images/mark.jpeg",
        imgAlt: "Foto do imóvel",
        description: "Rua Getúlio Vargas, n° 160, Bela Vista",
        title: "Casa em Ibirama",
        pricing: "R$1.200,00",
        url: "",
        icons: [faHouse, faBed, faDog]
    },
    {
        id: 4,
        img: "/images/mark.jpeg",
        imgAlt: "Foto do imóvel",
        description: "Rua Getúlio Vargas, n° 160, Bela Vista",
        title: "Casa em Ibirama",
        pricing: "R$800,00",
        url: "",
        icons: [faHouse, faBed, faDog]
    },
    {
        id: 5,
        img: "/images/mark.jpeg",
        imgAlt: "Foto do imóvel",
        description: "Rua Getúlio Vargas, n° 160, Bela Vista",
        title: "Casa em Ibirama",
        pricing: "R$1.500,00",
        url: "",
        icons: [faHouse, faBed, faDog]
    },
    {
        id: 6,
        img: "/images/mark.jpeg",
        imgAlt: "Foto do imóvel",
        description: "Rua Getúlio Vargas, n° 160, Bela Vista",
        title: "Casa em Ibirama",
        pricing: "R$850,00",
        url: "",
        icons: [faHouse, faBed, faDog]
    }
]

export default function Home(){
    return(
        <>
        <FadingImage/>
        
        <Main>
            <SearchBar/>
            <GridLocCards imoveisMockados={imoveisMockados}></GridLocCards>
        </Main>
        </>
    )
}