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
import { useRouter } from "next/navigation";
import Input from "@/components/inputs/Input";
import ErrorMessage from "@/components/modal/ErrorMessage";

function CadastroLocador() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const locador = true;
  const [profilePicture, setProfilePicture] = useState();
  const [erro, setErro] = useState(false);

  const router = useRouter();

  async function cadastrarLocador(e) {
    e.preventDefault();

    if (!validateData()) {
      return;
    }

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

      const response = await fetch("http://localhost:8080/usuarios", {
        method: "POST",
        body: formData,
      });
      
      router.push("/login");
    } catch (err) {
      console.log(err);
      console.log(err.response);
      console.log(err.response?.data);
      console.log(err.response?.headers);
      const newErrors = {};
      newErrors.geral =
        "Não foi possível cadastrar o locador, tente novamente mais tarde.";
      setErro(newErrors);
    }
  }

  const validateData = () => {
    const newErrors = {};

    if(!name.trim()){
      newErrors.nome = "O nome é obrigatório.";
    }

    if(!email.trim()){
      newErrors.email = "O e-mail é obrigatório.";
    }

    if(!phone.trim()){
      newErrors.telefone = "O telefone é obrigatório.";
    }

    if(password !== confirmPassword){
      newErrors.senha = "O campo senha e confirmar senha devem ser iguais.";
      newErrors.confirmarSenha = "O campo senha e confirmar senha devem ser iguais.";
    } else{
      if(!password.trim()){
        newErrors.senha = "A senha é obrigatória.";
      }
      if(!confirmPassword.trim()){
        newErrors.confirmarSenha = "A confirmação de senha é obrigatória.";
      }
    }

    if (Object.keys(newErrors).length > 0) {
      newErrors.geral =
        "Não foi possível cadastrar locador. Há dados obrigatórios em branco ou incorretos.";
    }

    setErro(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  return (
    <Main>
      <Logo></Logo>
      <SectionLogin>
        <h1>Seja bem-vindo(a) ao CampUs!</h1>
        {erro && <ErrorMessage>{erro.geral}</ErrorMessage>}
        <FormsLogin onSubmit={cadastrarLocador}>
          <ProfilePicture
            image={profilePicture}
            setImage={setProfilePicture}
          ></ProfilePicture>
          <Input
            label="Nome completo"
            value={name}
            onChange={setName}
            required
            placeholder="José da Silva"
            id="emailLocador"
            error={erro.nome}
            rounded
          ></Input>
          <Input
            label="E-mail"
            value={email}
            onChange={setEmail}
            required
            placeholder="josesilva@gmail.com"
            id="emailLocador"
            error={erro.email}
            rounded
          ></Input>
          <Input
            label="Telefone"
            value={phone}
            onChange={setPhone}
            required
            placeholder="(47) 99999-9999"
            id="emailLocador"
            error={erro.telefone}
            rounded
          ></Input>
          <Input
            label="Senha"
            id="senhaLocador"
            value={password}
            onChange={setPassword}
            required
            type="password"
            error={erro.senha}
            rounded
          ></Input>
          <Input
            label="Confirme sua senha"
            id="confirmacaoSenhaLocador"
            value={confirmPassword}
            onChange={setConfirmPassword}
            required
            type="password"
            error={erro.confirmarSenha}
            rounded
          ></Input>
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
