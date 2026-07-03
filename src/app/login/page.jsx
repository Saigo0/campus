"use client";

import { useState } from "react";
import InputLogin from "@/components/login/InputLogin";
import LoginButton from "@/components/buttons/ButtonForms";
import Main from "@/components/login/Main";
import SectionLogin from "@/components/login/SectionLogin";
import FormsLogin from "@/components/login/FormsLogin";
import Link from "next/link";
import Logo from "@/components/logo/Logo";
import api from "@/app/utils/api";
import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";
import ErrorMessage from "@/components/modal/ErrorMessage";
import Input from "@/components/inputs/Input";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setToken } = useAuth();
  const router = useRouter();
  const [erro, setErro] = useState({});

  async function login(e) {
    e.preventDefault();
    if(!validateData()){
      return;
    }
    try {
      const res = await api.post("/login", {
        email,
        senha: password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("id", res.data.id);

      setToken(res.data.token);
      
      router.push("/home");
    } catch (err) {
      const newErrors = {}
      newErrors.geral = "Não foi possível realizar o login. E-mail ou senha incorretos."
      setErro(newErrors);
    }
  }

  const validateData = () => {
    const newErrors = {}

    if(!email.trim()){
      newErrors.email = "O e-mail é obrigatório."
    }

    if(!password.trim()){
      newErrors.senha = "A senha é obrigatória."
    }

    setErro(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  return (
    <Main>
      <Logo></Logo>
      <SectionLogin className="border-t-2 border-t-[#1B3B99] bg-white">
        <h1 className="font-bold">Seja bem-vindo(a) de volta!</h1>
        {erro.geral && <ErrorMessage>{erro.geral}</ErrorMessage>}
        <FormsLogin onSubmit={login}>
          <Input
            value={email}
            label={"Email"}
            onChange={setEmail}
            placeholder="anaClara@gmail.com"
            id="emailLogin"
            rounded
            error={erro.email}
          ></Input>
          <Input
            value={password}
            label="Senha"
            onChange={setPassword}
            forgot={true}
            id="passwordLogin"
            type="password"
            rounded
            error={erro.senha}
          ></Input>
          <LoginButton>Entrar</LoginButton>
          <span className="items-center text-sm">
            Não tem uma conta?{" "}
            <Link
              href="/locador/cadastro"
              className="text-[#1B3B99] dark:text-[#819BFF] "
            >
              Criar conta
            </Link>
          </span>
        </FormsLogin>
      </SectionLogin>
    </Main>
  );
}

export default Login;
