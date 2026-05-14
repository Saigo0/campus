"use client";

import Image from "next/image";
import { useState } from "react";
import InputLogin from "@/components/login/InputLogin";
import LoginButton from "@/components/login/LoginButton";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="bg-[#EFEFFF] min-h-screen flex items-center justify-center flex-col">
      <Image
        src="/images/logo.png"
        alt="Logo"
        width={120}
        height={120}
        className=""
      ></Image>
      <section className="bg-white p-5 md:p-10 items-center rounded-3xl flex flex-col gap-5 w-3/4 md:w-2/4 lg:w-1/3">
        <h1 className="font-bold">Seja bem-vindo(a) de volta!</h1>
        <form action="" className="flex flex-col gap-5 w-full">
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
          <LoginButton></LoginButton>
          <span className="items-center text-sm">Não tem uma conta? <span className="text-[#1B3B99]">Criar conta</span></span>
        </form>
      </section>
    </main>
  );
}

export default Login;
