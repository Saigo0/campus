"use client";

import Image from "next/image";
import { useState } from "react";
import InputLogin from "@/components/login/InputLogin";
import LoginButton from "@/components/buttons/ButtonForms";
import Main from "@/components/login/Main";
import SectionLogin from "@/components/login/SectionLogin";
import FormsLogin from "@/components/login/FormsLogin";
import Link from "next/link";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Main>
      <Image
        src="/images/logo.png"
        alt="Logo"
        width={120}
        height={120}
        className="mb-5"
      ></Image>
      <SectionLogin className="border-t-2 border-t-[#1B3B99] bg-white">
        <h1 className="font-bold">Seja bem-vindo(a) de volta!</h1>
        <FormsLogin>
          <InputLogin
            value={email}
            label={"Email"}
            onChange={setEmail}
            placeholder="anaClara"
            id="emailLogin"
          ></InputLogin>
          <InputLogin
            value={password}
            label="Senha"
            onChange={setPassword}
            forgot = {true}
            id="passwordLogin"
            type="password"
          >
          </InputLogin>
          <LoginButton>Entrar</LoginButton>
          <span className="items-center text-sm">Não tem uma conta? <Link href="/locador/cadastro" className="text-[#1B3B99] dark:text-[#819BFF] ">Criar conta</Link></span>
        </FormsLogin>
      </SectionLogin>
    </Main>
  );
}

export default Login;
