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