"use client";

import Container from "@/components/Container";
import SectionInfo from "@/components/forms/SectionInfo";
import BoxInfo from "@/components/forms/InfoBox";
import Input from "@/components/inputs/Input";
import { useState } from "react";
import DividedInput from "@/components/inputs/DividedInput";
import Option from "@/components/forms/Option";
import {
  faHouse,
  faBuilding,
  faRestroom,
  faBed,
  faWarehouse,
  faUser,
  faUsersRays,
} from "@fortawesome/free-solid-svg-icons";
import Grid from "@/components/forms/Grid";
import Utility from "@/components/forms/Utility";

function CadastroLocacao() {
  const [cidade, setCidade] = useState("");
  const [cep, setCep] = useState("");
  const [bairro, setBairro] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState();
  const [distanciaCeavi, setDistanciaCeavi] = useState("");

  const [areaImovel, setAreaImovel] = useState();
  const [quantidadeQuartos, setQuantidadeQuartos] = useState();
  const [quantidadeBanheiros, setQuantidadeBanheiros] = useState();

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
        <SectionInfo title={"Informações gerais"} description={"Informe os dados gerais acerca da sua propriedade."} icon={faHouse}>
          <div>
            <BoxInfo
              title={"Dados Gerais"}
              icon={faHouse}
            >

            </BoxInfo>
            <BoxInfo
              title={"Custos da Locação"}
              icon={faHouse}
            >
              
            </BoxInfo>
          </div>
        </SectionInfo>
        <SectionInfo
          description={
            "Informe os detalhes acerca da capacidade da sua locação."
          }
          title={"Especificações de capacidade"}
        >
          <BoxInfo title={"Endereço"}>
            <DividedInput>
              <Input
                label={"CIDADE"}
                onChange={setCidade}
                required
                placeholder="Digite aqui a cidade do imóvel..."
                id={"cidade"}
                rounded
              ></Input>
              <Input
                label={"CEP"}
                onChange={setCep}
                required
                placeholder="Digite aqui o CEP do imóvel..."
                id={"cep"}
                rounded
              ></Input>
            </DividedInput>
            <DividedInput>
              <Input
                label={"BAIRRO"}
                onChange={setBairro}
                required
                placeholder="Digite aqui o bairro do imóvel..."
                id={"bairro"}
                rounded
              ></Input>
              <Input
                label={"RUA"}
                onChange={setRua}
                required
                placeholder="Digite aqui a rua do imóvel..."
                id={"rua"}
                rounded
              ></Input>
            </DividedInput>
            <DividedInput>
              <Input
                label={"NÚMERO"}
                onChange={setNumero}
                placeholder="Digite aqui o número do imóvel..."
                id={"numero"}
                rounded
              ></Input>
              <Input
                label={"DISTÂNCIA DO CEAVI"}
                onChange={setDistanciaCeavi}
                required
                placeholder="Digite aqui a distância do CEAVI até o imóvel..."
                id={"distanciaCeavi"}
                rounded
              ></Input>
            </DividedInput>
          </BoxInfo>
          <BoxInfo title={"Especificações do imóvel"}>
            <DividedInput>
              <Input
                id={"areaImovel"}
                label={"ÁREA DO IMÓVEL"}
                onChange={setAreaImovel}
                type="number"
                rounded
              ></Input>
              <Input
                id={"quantidadeQuartos"}
                label={"QUANTIDADE DE QUARTOS"}
                onChange={setQuantidadeQuartos}
                type="number"
                rounded
              ></Input>
              <Input
                id={"quantidadeBanheiros"}
                label={"QUANTIDADE DE BANHEIROS"}
                onChange={setQuantidadeBanheiros}
                type="number"
                rounded
              ></Input>
            </DividedInput>
            <label>TIPO DO ALUGUEL DO IMÓVEL</label>
            <DividedInput>
              <Option icon={faHouse}>Casa</Option>
              <Option icon={faBuilding}>Apartamento</Option>
              <Option icon={faWarehouse}>Kitnet</Option>
              <Option icon={faBed}>Quarto</Option>
            </DividedInput>
            <label>TIPO DO QUARTO</label>
            <DividedInput>
              <Option icon={faUser}>
                Individual
                <input type="number" placeholder="0" />
              </Option>
              <Option icon={faUser}>
                Duplo
                <input type="number" placeholder="0" />
              </Option>
              <Option icon={faUser}>
                Triplo
                <input type="number" placeholder="0" />
              </Option>
            </DividedInput>
          </BoxInfo>
        </SectionInfo>
        <SectionInfo
          description={"Informe os detalhes adicionais sobre a sua locação."}
          title={"Informações Adicionais"}
        >
          <DividedInput>
            <BoxInfo title={"Comodidades e Instalações"}>
              <div className="flex">
                <Grid
                  elementsList={[
                    { icon: faHouse, title: "Mobiliado" },
                    { icon: faHouse, title: "Garagem" },
                    { icon: faHouse, title: "Aceita pets" },
                    { icon: faHouse, title: "Piscina" },
                    { icon: faHouse, title: "Área de lazer" },
                    { icon: faHouse, title: "Elevador" },
                    { icon: faHouse, title: "Churrasqueira" },
                    { icon: faHouse, title: "Academia" },
                    { icon: faHouse, title: "Escada" },
                    { icon: faHouse, title: "Apenas mulheres" },
                    { icon: faHouse, title: "Apenas homens" },
                  ]}
                />
                <BoxInfo title={"Incluídos"}>
                  <Utility icon={faUsersRays} title={"Eletricidade"}></Utility>
                  <Utility icon={faUsersRays} title={"Água"}></Utility>
                  <Utility icon={faUsersRays} title={"Internet"}></Utility>
                  <Utility icon={faUsersRays} title={"Gás"}></Utility>
                </BoxInfo>
              </div>
            </BoxInfo>
          </DividedInput>
        </SectionInfo>
      </Container>
    </>
  );
}

export default CadastroLocacao;
