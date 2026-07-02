"use client"

import NavLi from "./NavLi";

export default function Nav(){
    return (
        <nav className="w-full">
            <ul className="flex flex-wrap justify-center gap-2 md:gap-8">
                <NavLi href="/">Home</NavLi>
                <NavLi href="/locacoes/analise">Análise</NavLi>
                <NavLi href="/">Suas locações</NavLi>
            </ul>
        </nav>
    );
}