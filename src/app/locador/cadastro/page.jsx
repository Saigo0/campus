"use client";

import Main from "@/components/login/Main";
import SectionLogin from "@/components/login/SectionLogin";
import FormsLogin from "@/components/login/FormsLogin";
import InputLogin from "@/components/login/InputLogin";
import { useState } from "react";
import LoginButton from "@/components/buttons/ButtonForms";
import Link from "next/link";
import ProfilePicture from "@/components/forms/locador/ProfilePicture";
import api from "@/app/utils/api";
import Logo from "@/components/logo/Logo";

function CadastroLocador() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const locador = true;
  const [profilePicture, setProfilePicture] = useState();

  async function cadastrarLocador(e) {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("nome", name);
      formData.append("email", email);
      formData.append("senha", password);
      formData.append("telefone", phone);
      formData.append("locador", true);
      formData.append("administrador", false);

      if (profilePicture) {
        formData.append("file", profilePicture);
      }

      const response = await api.post("/usuarios", formData);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Main>
      <Logo></Logo>
      <SectionLogin>
        <h1>Seja bem-vindo(a) ao CampUs!</h1>
        <FormsLogin onSubmit={cadastrarLocador}>
          <ProfilePicture
            image={profilePicture}
            setImage={setProfilePicture}
          ></ProfilePicture>
          <InputLogin
            label="Nome completo"
            value={name}
            onChange={setName}
            required
            placeholder="José da Silva"
            id="emailLocador"
          ></InputLogin>
          <InputLogin
            label="Email"
            value={email}
            onChange={setEmail}
            required
            placeholder="josesilva@gmail.com"
            id="emailLocador"
          ></InputLogin>
          <InputLogin
            label="Telefone"
            value={phone}
            onChange={setPhone}
            required
            placeholder="(47) 99999-9999"
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
        <span className="items-center text-sm">
          Já tem uma conta?{" "}
          <Link href="/login" className="text-[#1B3B99] dark:text-[#819BFF]">
            Entrar
          </Link>
        </span>
      </SectionLogin>
    </Main>
  );
}

export default CadastroLocador;
