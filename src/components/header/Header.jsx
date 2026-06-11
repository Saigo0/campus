"use client"

import Logo from "@/components/logo/Logo";
import RedirectButton from "../buttons/RedirectButton";
import Theme from "@/components/theme/Theme";

function Header({children}) {
  return (
    <header className="bg-[#FFFFFF] dark:bg-[#03132c]  flex justify-between items-center relative z-10 py-2 px-20 shadow-lg">
      <Logo />

      <div className="flex-grow flex justify-center">
        {children}
      </div>
      
      <div className="flex gap-5">
        <Theme />
        <RedirectButton destiny={"/login"}>Entrar</RedirectButton>
      </div>
    </header>
  );
}

export default Header;

