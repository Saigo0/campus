import Image from "next/image";
import Logo from "@/components/logo/Logo";
import RedirectButton from "../buttons/RedirectButton";

function Header() {
  return (
    <header className="bg-[#FFFFFF] flex justify-between items-center p-2 shadow-md">
      <Logo></Logo>
      <RedirectButton destiny={"/login"}>Entrar</RedirectButton>
    </header>
  );
}

export default Header;
