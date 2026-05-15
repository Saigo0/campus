"use client";

import Container from "@/components/Container";
import SectionInfo from "@/components/forms/SectionInfo";
import BoxInfo from "@/components/forms/InfoBox";
import Input from "@/components/inputs/Input";
import { useState } from "react";

function CadastroLocacao() {
  const [cidade, setCidade] = useState("");
  return (
    <>
      <Container>
        <div>
          <h1 className="font-bold text-2xl">Criando sua locação</h1>
          <p>
            Preencha os campos com as informações correspondentes ao imóvel a
            ser cadastrado.
          </p>
        </div>
        {/* colocar aqui a barrinha lá */}
        <SectionInfo
          description={
            "Informe os detalhes acerca da capacidade da sua locação."
          }
          title={"Especificações de capacidade"}
        >
          <BoxInfo title={"Endereço"}>
            <Input
              label={"Cidade"}
              onChange={setCidade}
              required
              placeholder="Digite aqui a cidade do imóvel..."
              id={"cidade"}
              rounded
            ></Input>
          </BoxInfo>
        </SectionInfo>
      </Container>
    </>
  );
}

export default CadastroLocacao;
