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
  faHomeUser,
  faInfo,
  faMoneyBill,
  faAddressBook,
  faAddressCard,
  faDog,
  faSwimmingPool,
  faParking,
  faElevator,
  faGripLinesVertical,
  faWifi,
  faDroplet,
  faFireFlameSimple,
  faBolt,
  faStairs,
  faVenus,
  faMars,
  faUserGroup,
  faUsers,
  faDumbbell,
  faFireBurner,
  faGamepad,
  faDoorOpen,
} from "@fortawesome/free-solid-svg-icons";
import Grid from "@/components/forms/Grid";
import Utility from "@/components/forms/Utility";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons/faInfoCircle";
import TextArea from "@/components/inputs/TextArea";

function CadastroLocacao() {
  const [cidade, setCidade] = useState("");
  const [cep, setCep] = useState("");
  const [bairro, setBairro] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState();
  const [distanciaCeavi, setDistanciaCeavi] = useState("");

  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [regras, setRegras] = useState("");
  const [aluguel, setAluguel] = useState("");
  const [tempoContratoMinimo, setTempoContratoMinimo] = useState("");
  const [condominio, setCondominio] = useState(false);
  const [taxaCondominio, setTaxaCondominio] = useState("");
  const [total, setTotal] = useState("");

  const [areaImovel, setAreaImovel] = useState();
  const [quantidadeQuartos, setQuantidadeQuartos] = useState();
  const [quantidadeBanheiros, setQuantidadeBanheiros] = useState();
  const [tipoImovel, setTipoImovel] = useState();

  const [comodidades, setComodidades] = useState([]);
  const [inclusos, setInclusos] = useState([]);

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
          title={"Informações gerais"}
          description={"Informe os dados gerais acerca da sua propriedade."}
          icon={faHouse}
        >
          <div className="flex gap-10">
            <div className="w-2/3">
              <BoxInfo title={"Dados Gerais"} icon={faAddressBook}>
                <Input
                  label={"TÍTULO"}
                  placeholder="Digite aqui o título do imóvel..."
                  onChange={setTitulo}
                  required
                  id={"titulo"}
                  rounded
                ></Input>
                <TextArea
                  label={"DESCRIÇÃO"}
                  onChange={setDescricao}
                  required
                  rounded
                  placeholder="Descreva aqui o imóvel..."
                  id={"descricao"}
                ></TextArea>
                <TextArea
                  label={"REGRAS DO IMÓVEL"}
                  onChange={setRegras}
                  rounded
                  placeholder="Descreva aqui as regras do imóvel..."
                  id={"regras"}
                ></TextArea>
              </BoxInfo>
            </div>
            <div className="w-1/3">
              <BoxInfo title={"Custos da Locação"} icon={faMoneyBill}>
                <Input
                  label={"ALUGUEL MENSAL"}
                  onChange={setAluguel}
                  required
                  type="number"
                  rounded
                  id={"aluguel"}
                ></Input>
                <Input
                  label={"TAXA DE CONDOMÍNIO"}
                  onChange={setTaxaCondominio}
                  required
                  rounded
                  id={"taxaCondominio"}
                ></Input>
              </BoxInfo>
            </div>
          </div>
        </SectionInfo>
        <SectionInfo
          description={
            "Informe os detalhes acerca da capacidade da sua locação."
          }
          title={"Especificações de capacidade"}
        >
          <BoxInfo title={"Endereço"} icon={faInfoCircle}>
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
          <BoxInfo title={"Especificações do imóvel"} icon={faHouse}>
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
              <Option
                icon={faHouse}
                onClick={() => setTipoImovel("Casa")}
                selected={tipoImovel === "Casa"}
              >
                Casa
              </Option>
              <Option
                icon={faBuilding}
                onClick={() => setTipoImovel("Apartamento")}
                selected={tipoImovel === "Apartamento"}
              >
                Apartamento
              </Option>
              <Option
                icon={faDoorOpen}
                onClick={() => setTipoImovel("Kitnet")}
                selected={tipoImovel === "Kitnet"}
              >
                Kitnet
              </Option>
              <Option
                icon={faBed}
                onClick={() => setTipoImovel("Quarto")}
                selected={tipoImovel === "Quarto"}
              >
                Quarto
              </Option>
            </DividedInput>
            <label>TIPO DO QUARTO</label>
            <DividedInput>
              <Option icon={faUser} type="room">
                Individual
                <input
                  type="number"
                  placeholder="0"
                  min={0}
                  className="text-center"
                />
              </Option>
              <Option icon={faUserGroup} type="room">
                Duplo
                <input
                  type="number"
                  placeholder="0"
                  min={0}
                  className="text-center"
                />
              </Option>
              <Option icon={faUsers} type="room">
                Triplo
                <input
                  type="number"
                  placeholder="0"
                  min={0}
                  className="text-center"
                />
              </Option>
            </DividedInput>
          </BoxInfo>
        </SectionInfo>
        <SectionInfo
          description={"Informe os detalhes adicionais sobre a sua locação."}
          title={"Informações Adicionais"}
        >
          <DividedInput>
            <div className="flex flex-col md:flex-row gap-10 w-full">
              <BoxInfo title={"Comodidades e Instalações"} icon={faBuilding}>
                <Grid
                  elementsList={[
                    { icon: faHouse, title: "Mobiliado"},
                    { icon: faWarehouse, title: "Garagem" },
                    { icon: faDog, title: "Aceita pets" },
                    { icon: faSwimmingPool, title: "Piscina" },
                    { icon: faGamepad, title: "Área de lazer" },
                    { icon: faElevator, title: "Elevador" },
                    { icon: faFireBurner, title: "Churrasqueira" },
                    { icon: faDumbbell, title: "Academia" },
                    { icon: faStairs, title: "Escada" },
                    { icon: faVenus, title: "Apenas mulheres" },
                    { icon: faMars, title: "Apenas homens" },
                  ]}
                />
              </BoxInfo>
              <BoxInfo title={"Incluídos"}>
                <div className="flex flex-col gap-5">
                  <Utility icon={faBolt} title={"Eletricidade"}></Utility>
                  <Utility icon={faDroplet} title={"Água"}></Utility>
                  <Utility icon={faWifi} title={"Internet"}></Utility>
                  <Utility icon={faFireFlameSimple} title={"Gás"}></Utility>
                </div>
              </BoxInfo>
            </div>
          </DividedInput>
        </SectionInfo>
      </Container>
    </>
  );
}

export default CadastroLocacao;
