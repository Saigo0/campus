import Image from "next/image";
import Logo from "@/components/logo/Logo";
import RedirectButton from "../buttons/RedirectButton";

function Header() {
  return (
    <header className="bg-[#FFFFFF] flex justify-between items-center relative z-10 py-2 px-10 shadow-lg">
      <Logo></Logo>
      <RedirectButton destiny={"/login"}>Entrar</RedirectButton>
    </header>
  );
}

export default Header;
