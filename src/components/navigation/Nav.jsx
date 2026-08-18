"use client"

import { useState, useEffect } from "react";
import NavLi from "./NavLi";

export default function Nav() {
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        const userStorage = localStorage.getItem("usuarioCompleto"); 
        if (userStorage) {
            setUsuario(JSON.parse(userStorage));
        }
    }, []);

    const isAdmin = usuario?.administrador === true;
    const isLocador = usuario?.locador === true;

    return (
        <nav className="w-full">
            <ul className="flex flex-wrap justify-center gap-2 md:gap-8">
                <NavLi href="/">Home</NavLi>
            {/*
                {isAdmin && (
                    <NavLi href="/locacoes/analise">Análise</NavLi>
                )}

                {isLocador && (
                    <NavLi href="/locacoes/listar">Suas locações</NavLi>
                )}
            */}
            </ul>
        </nav>
    );
}