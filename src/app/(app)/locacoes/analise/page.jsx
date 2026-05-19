import Header from "@/components/header/Header";
import GridLocCards from "@/components/grids/GridLocCards";
import Main from "@/components/home/Main";
import H1 from "@/components/heading/H1";
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
        approvement: "Undefined",
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
        approvement: "Undefined",
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
        approvement: "Undefined",
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
        approvement: "Undefined",
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
        approvement: "Undefined",
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
        approvement: "Undefined",
        icons: [faHouse, faBed, faDog]
    }
]

export default function Analise(){
    return(
        <>
        <div className="flex flex-col w-full max-w-6xl mx-auto px-4">
            <div className="flex flex-col mb-2 ml-35">
                <H1>Formulários para Análise</H1>
                <p className="text-[#575881] font-semibold">Há 4 imóveis aguardando pela liberação da análise</p>
            </div>

            <Main>
                <GridLocCards imoveisMockados={imoveisMockados}></GridLocCards>
            </Main>
        </div>
        </>
    )
}