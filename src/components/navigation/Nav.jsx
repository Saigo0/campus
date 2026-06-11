"use client"

import NavLi from "./NavLi";

export default function Nav(){
    return (
        <nav>
            <ul className="flex gap-8">
                <NavLi href="/">Home</NavLi>
                <NavLi href="/locacoes/analise">Análise</NavLi>
                <NavLi href="/">Suas locações</NavLi>
            </ul>
        </nav>
    );
}
