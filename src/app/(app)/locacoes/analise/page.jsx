import Header from "@/components/header/Header";
import GridLocCards from "@/components/grids/GridLocCards";
import Main from "@/components/home/Main";
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

export default function Analise(){
    return(
        <>

        <Main>
            <GridLocCards imoveisMockados={imoveisMockados}></GridLocCards>
        </Main>
        
        </>
    )
}