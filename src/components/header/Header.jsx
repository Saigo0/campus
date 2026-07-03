"use client"

import { useState, useEffect, useRef } from "react";
import Logo from "@/components/logo/Logo";
import RedirectButton from "../buttons/RedirectButton";
import Theme from "@/components/theme/Theme";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import api from "@/app/utils/api"; 
import { useRouter } from "next/navigation";

function Header({ children }) {
  const [usuario, setUsuario] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [fotoComErro, setFotoComErro] = useState(false); 
  
  const dropdownRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    async function buscarUsuarioLogado() {
      const id = localStorage.getItem("id");
      if (id) {
        try {
          const res = await api.get(`/usuarios/${id}`);
          setUsuario(res.data);
          localStorage.setItem("usuarioCompleto", JSON.stringify(res.data));
        } catch (error) {
          console.error("Erro ao buscar dados do usuário pro Header:", error);
        }
      }
    }
    buscarUsuarioLogado();
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("token");
    localStorage.removeItem("usuarioCompleto");
    setUsuario(null);
    setIsDropdownOpen(false);
    router.push("/login");
  };

  const urlFotoUsuario = usuario?.id ? `http://localhost:8080/midia/usuario/${usuario.id}/foto` : null;

  return (
    <header className="bg-white dark:bg-[#03132c] flex flex-wrap justify-between items-center relative z-10 py-3 px-4 md:px-10 lg:px-20 shadow-lg gap-y-4">
      <div className="order-1">
        <Logo />
      </div>

      <div className="flex items-center gap-4 md:gap-5 order-2 lg:order-3">
        
        {usuario ? (
          <div className="relative" ref={dropdownRef}>
            
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="shrink-0 hover:scale-105 transition-transform focus:outline-none flex items-center"
            >
              {urlFotoUsuario && !fotoComErro ? (
                <Image 
                  src={urlFotoUsuario} 
                  alt="Foto de Perfil" 
                  width={40} 
                  height={40} 
                  className="rounded-full object-cover w-[40px] h-[40px] border-2 border-[#1B3B99] dark:border-[#819BFF]"
                  unoptimized
                  onError={() => setFotoComErro(true)}
                />
              ) : (
                <FontAwesomeIcon 
                  icon={faCircleUser} 
                  className="text-[40px] text-gray-400 dark:text-gray-300"
                />
              )}
            </button>

            {isDropdownOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-48 bg-white dark:bg-[#1f1f25] border border-gray-100 dark:border-gray-800 rounded-xl shadow-lg py-2 z-50 flex flex-col">
                
                {usuario.locador && (
                  <Link 
                    href="/locador/minhas-locacoes" 
                    className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Minhas locações
                  </Link>
                )}

                {usuario.administrador && (
                  <Link 
                    href="/locacoes/analise" 
                    className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Análise
                  </Link>
                )}
                
                <button 
                  onClick={handleLogout}
                  className="text-left px-4 py-2 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-[#2e2e44] transition border-t border-gray-100 dark:border-gray-700 mt-1 pt-2"
                >
                  Sair
                </button>
              </div>
            )}
          </div>
        ) : (
          <RedirectButton destiny={"/login"}>Entrar</RedirectButton>
        )}
        <Theme />
      </div>
      
      <div className="flex-grow flex justify-center w-full lg:w-auto order-3 lg:order-2">
        {children}
      </div>
    </header>
  );
}

export default Header;