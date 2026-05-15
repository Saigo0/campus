import Image from "next/image";
import RedirectButton from "../buttons/RedirectButton";

function Header() {
  return (
    <header className="flex justify-between items-center p-2 shadow-md">
      <Image
        src="/images/logo.png"
        alt="Logo"
        width={120}
        height={120}
        className=""
      ></Image>
      <RedirectButton destiny={"/login"}>Entrar</RedirectButton>
    </header>
  );
}

export default Header;
