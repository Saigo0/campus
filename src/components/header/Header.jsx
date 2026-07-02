"use client"

import Logo from "@/components/logo/Logo";
import RedirectButton from "../buttons/RedirectButton";
import Theme from "@/components/theme/Theme";

function Header({children}) {
  return (
    <header className="bg-[#FFFFFF] dark:bg-[#03132c]  flex flex-wrap justify-between items-center relative z-10 py-3 px-4 shadow-lg gap-y-4">
      <div className="order-1">
        <Logo />
      </div>


      <div className="flex items-center gap-3 md:gap-5 order-2 lg:order-3">
        <Theme />
        <RedirectButton destiny={"/login"}>Entrar</RedirectButton>
      </div>
      

      <div className="flex-grow flex justify-center w-full lg:w-auto order-3 lg:order-2">
        {children}
      </div>

      
    </header>
  );
}

export default Header;

