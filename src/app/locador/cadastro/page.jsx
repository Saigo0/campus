"use client";

import Main from "@/components/login/Main";
import Image from "next/image";
import SectionLogin from "@/components/login/SectionLogin";
import FormsLogin from "@/components/login/FormsLogin";
import InputLogin from "@/components/login/InputLogin";
import { useState } from "react";
import LoginButton from "@/components/login/LoginButton";

function CadastroLocador() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <Main>
      <Image
        src="/images/logo.png"
        alt="Logo"
        width={120}
        height={120}
        className=""
      ></Image>
      <SectionLogin>
        <h1>Seja bem-vindo(a) ao CampUs!</h1>
        <FormsLogin>
          <InputLogin
            label="Email"
            value={email}
            onChange={setEmail}
            required
            placeholder="anaClara"
            id="emailLocador"
          ></InputLogin>
          <InputLogin
            label="Senha"
            id="senhaLocador"
            value={password}
            onChange={setPassword}
            required
            type="password"
          ></InputLogin>
          <InputLogin
            label="Confirme sua senha"
            id="confirmacaoSenhaLocador"
            value={confirmPassword}
            onChange={setConfirmPassword}
            required
            type="password"
          ></InputLogin>
          <LoginButton>Cadastrar-se</LoginButton>
        </FormsLogin>
        <span className="items-center text-sm">Já tem uma conta? <span className="text-[#1B3B99]">Entrar</span></span>
      </SectionLogin>
    </Main>
  );
}

export default CadastroLocador;
