"use client"

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function Theme() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="relative flex h-10 w-20 items-center rounded-full bg-gradient-to-r from-[#1B3B99] to-[#819BFF] dark:from-[#b6c4ff] dark:to-[#819BFF] transition-all duration-500"
    >
      <div
        className={`absolute flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md transition-all duration-500 ${
          dark ? "translate-x-11" : "translate-x-1"
        }`}
      >
        {dark ? (
          <FontAwesomeIcon icon={faMoon} className="text-slate-700" />
        ) : (
          <FontAwesomeIcon icon={faSun} className="text-yellow-500" />
        )}
      </div>
    </button>
  );
}

/*

acho que esse código aqui embaixo pode resolver a questão de perder o tema escuro quando recarrega a página

"use client"

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function Theme() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDark(true);
    }
  }, []);

  useEffect(() => {
    if(!mounted) return;

    document.documentElement.classList.toggle("dark", dark);

    localStorage.setItem("theme", dark? "dark" : "light");
    
  }, [dark, mounted]);

  if(!mounted){
    return <div className="h-10 w-20"></div>;
  }

  return (
    <button
      onClick={() => setDark(!dark)}
      className="relative flex h-10 w-20 items-center rounded-full bg-gradient-to-r from-[#1B3B99] to-[#819BFF] dark:from-[#b6c4ff] dark:to-[#819BFF] transition-all duration-500"
    >
      <div
        className={`absolute flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md transition-all duration-500 ${
          dark ? "translate-x-11" : "translate-x-1"
        }`}
      >
        {dark ? (
          <FontAwesomeIcon icon={faMoon} className="text-slate-700" />
        ) : (
          <FontAwesomeIcon icon={faSun} className="text-yellow-500" />
        )}
      </div>
    </button>
  );
}

*/
