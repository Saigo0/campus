"use client"

import Logo from "@/components/logo/Logo";
import RedirectButton from "../buttons/RedirectButton";
import Theme from "@/components/Theme";

function Header() {
  return (
    <header className="bg-[#FFFFFF] dark:bg-[#03132c]  flex justify-between items-center relative z-10 py-2 px-10 shadow-lg">
      <Logo></Logo>
      <div className="flex gap-5">
        <Theme></Theme>
        <RedirectButton destiny={"/login"}>Entrar</RedirectButton>
      </div>
    </header>
  );
}

export default Header;

