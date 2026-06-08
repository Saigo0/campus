"use client";

import Container from "@/components/Container";
import SectionInfo from "@/components/forms/SectionInfo";
import BoxInfo from "@/components/forms/InfoBox";
import Input from "@/components/inputs/Input";
import { useEffect, useState } from "react";
import DividedInput from "@/components/inputs/DividedInput";
import Option from "@/components/forms/Option";
import {
  faHouse,
  faBuilding,
  faBed,
  faWarehouse,
  faUser,
  faMoneyBill,
  faAddressBook,
  faDog,
  faSwimmingPool,
  faElevator,
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
  faPhotoFilm,
} from "@fortawesome/free-solid-svg-icons";
import Grid from "@/components/forms/Grid";
import Utility from "@/components/forms/Utility";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons/faInfoCircle";
import TextArea from "@/components/inputs/TextArea";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carrossel from "@/components/forms/Carrossel";
import Select from "@/components/forms/Select";
import ButtonForms from "@/components/buttons/ButtonForms";
import { useRouter } from "next/navigation";
import Erro from "@/components/warnings/Erro";

function CadastroLocacao() {
  const [cidade, setCidade] = useState("");
  const [cep, setCep] = useState("");
  const [bairro, setBairro] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [distanciaCeavi, setDistanciaCeavi] = useState("");

  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [regras, setRegras] = useState("");
  const [aluguel, setAluguel] = useState("");
  const [tempoContratoMinimo, setTempoContratoMinimo] = useState("");
  const [condominio, setCondominio] = useState(false);
  const [taxaCondominio, setTaxaCondominio] = useState("");
  const [total, setTotal] = useState("");

  const [areaImovel, setAreaImovel] = useState("");
  const [quantidadeQuartos, setQuantidadeQuartos] = useState("");
  const [quantidadeBanheiros, setQuantidadeBanheiros] = useState("");
  const [quantidadeQuartosDuplos, setQuantidadeQuartosDuplos] = useState(0);
  const [quantidadeQuartosIndividuais, setQuantidadeQuartosIndividuais] =
    useState(0);
  const [quantidadeQuartosTriplos, setQuantidadeQuartosTriplos] = useState(0);
  const [tipoImovel, setTipoImovel] = useState("");

  const [eletricidade, setEletricidade] = useState(false);
  const [agua, setAgua] = useState(false);
  const [internet, setInternet] = useState(false);
  const [gas, setGas] = useState(false);

  const [step, setStep] = useState(1);

  const router = useRouter();

  const [selectedItems, setSelectedItems] = useState([]);
  function selectItem(description) {
    setSelectedItems((prev) => {
      return prev.includes(description)
        ? prev.filter((i) => i != description)
        : [...prev, description];
    });
  }

  async function handleImage(e) {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    getImages();
  }

  const [images, setImages] = useState([]);

  async function getImages() {
    const res = await fetch("/api/upload");
    const data = await res.json();
    console.log(data);
    setImages(data);
  }

  const options = [
    { value: "3m", label: "3 meses" },
    { value: "6m", label: "6 meses" },
    { value: "12m", label: "12 meses" },
  ];

  function registerLocacao(e) {
    e.preventDefault();

    const validatedData = validateData();
    if (validatedData) {
      router.push("/home");
    }
  }

  const [erro, setErro] = useState(false);
  const [conteudoErro, setConteudoErro] = useState("");

  function validateData() {
    if (
      !cidade |
      !bairro |
      !rua |
      !quantidadeBanheiros |
      !distanciaCeavi |
      !titulo |
      !descricao |
      !aluguel
    ) {
      setErro(true);
      setConteudoErro(
        "Não foi possível realizar o cadastro, há informações obrigatórias em branco.",
      );
      return false;
    }

    if (
      quantidadeQuartos <
      quantidadeQuartosDuplos +
        quantidadeQuartosIndividuais +
        quantidadeQuartosTriplos
    ) {
      setErro(true);
      setConteudoErro(
        "Não foi possível realizar o cadastro, a quantidade dos quartos é menor que a quantidade informada na quantidade de cada tipo de quarto.",
      );
      return false;
    }

    return true;
  }

  useEffect(() => {
    getImages();
  }, []);

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
        <nav className="text-gray-600 w-3/4 mx-auto">
          <ol className="flex flex-row justify-between">
            <li
              className={`p-2 ${step == 1 ? "bg-linear-to-r from-[#1B3B99] to-[#819BFF] rounded-3xl text-white" : ""}`}
            >
              <button
                type="button"
                className="flex items-center gap-2"
                onClick={() => setStep(1)}
              >
                <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
                Informações Gerais
              </button>
            </li>
            <li
              className={`p-2 ${step == 2 ? "bg-linear-to-r from-[#1B3B99] to-[#819BFF] rounded-3xl text-white" : ""}`}
            >
              <button
                type="button"
                className="flex items-center gap-2"
                onClick={() => setStep(2)}
              >
                <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
                Esp. de Capacidade
              </button>
            </li>
            <li
              className={`p-2 ${step == 3 ? "bg-linear-to-r from-[#1B3B99] to-[#819BFF] rounded-3xl text-white" : ""}`}
            >
              <button
                type="button"
                className="flex items-center gap-2"
                onClick={() => setStep(3)}
              >
                <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
                Informações Adicionais
              </button>
            </li>
          </ol>
        </nav>
        <form onSubmit={registerLocacao}>
          <Erro erro={erro} conteudo={conteudoErro}></Erro>
          {step == 1 && (
            <SectionInfo
              title={"Informações gerais"}
              description={"Informe os dados gerais acerca da sua propriedade."}
              icon={faHouse}
              className="flex flex-col gap-10"
            >
              <BoxInfo
                title={"Galeria Visual"}
                icon={faPhotoFilm}
                addImage
                onChange={handleImage}
              >
                {images.length > 0 && (
                  <img
                    src={images[0].url}
                    alt=""
                    className="h-140 object-cover w-full mb-5 rounded-xl"
                  />
                )}
                <Carrossel images={images}></Carrossel>
              </BoxInfo>
              <div className="flex flex-col md:flex-row gap-10">
                <div className=" w-full md:w-2/3">
                  <BoxInfo
                    title={"Dados Gerais"}
                    icon={faAddressBook}
                    className={"h-full"}
                  >
                    <Input
                      label={"TÍTULO"}
                      value={titulo}
                      placeholder="Digite aqui o título do imóvel..."
                      onChange={setTitulo}
                      required
                      id={"titulo"}
                      rounded
                    ></Input>
                    <TextArea
                      label={"DESCRIÇÃO"}
                      value={descricao}
                      onChange={setDescricao}
                      required
                      rounded
                      placeholder="Descreva aqui o imóvel..."
                      id={"descricao"}
                    ></TextArea>
                    <TextArea
                      label={"REGRAS DO IMÓVEL"}
                      value={regras}
                      onChange={setRegras}
                      rounded
                      placeholder="Descreva aqui as regras do imóvel..."
                      id={"regras"}
                    ></TextArea>
                  </BoxInfo>
                </div>
                <div className=" w-full md:w-1/3">
                  <BoxInfo
                    title={"Custos da Locação"}
                    icon={faMoneyBill}
                    className={"h-full"}
                  >
                    <Input
                      label={"ALUGUEL MENSAL"}
                      value={aluguel}
                      onChange={setAluguel}
                      required
                      type="number"
                      rounded
                      id={"aluguel"}
                    ></Input>
                    <label
                      htmlFor="tempoContrato"
                      className="text-sm text-gray-600"
                    >
                      TEMPO MÍNIMO DE CONTRATO
                    </label>
                    <Select
                      instanceId={"tempoContrato"}
                      inputId={"tempoContrato"}
                      options={options}
                      value={tempoContratoMinimo}
                      onChange={setTempoContratoMinimo}
                    ></Select>
                    <div className="flex items-center gap-2 mb-3">
                      <label
                        htmlFor="condominio"
                        className="text-gray-600 text-sm dark:text-white"
                      >
                        Possui condomínio?
                      </label>
                      <input
                        type="checkbox"
                        checked={condominio}
                        onChange={() => setCondominio(!condominio)}
                        id="condominio"
                        className=""
                      />
                    </div>
                    {condominio && (
                      <Input
                        label={"TAXA DE CONDOMÍNIO"}
                        onChange={setTaxaCondominio}
                        value={taxaCondominio}
                        required
                        rounded
                        id={"taxaCondominio"}
                      ></Input>
                    )}
                    <div className="flex justify-between p-3 rounded-3xl dark:bg-[#03132c] bg-[#F2EFFF]">
                      <p className="text-sm">Total estimado</p>
                      <p>R$</p>
                    </div>
                  </BoxInfo>
                </div>
              </div>
            </SectionInfo>
          )}
          {step == 2 && (
            <SectionInfo
              description={
                "Informe os detalhes acerca da capacidade da sua locação."
              }
              title={"Especificações de capacidade"}
              className="flex flex-col gap-10"
            >
              <BoxInfo title={"Endereço"} icon={faInfoCircle}>
                <DividedInput>
                  <Input
                  value={cidade}
                    label={"CIDADE"}
                    onChange={setCidade}
                    required
                    placeholder="Digite aqui a cidade do imóvel..."
                    id={"cidade"}
                    rounded
                  ></Input>
                  <Input
                    label={"CEP"}
                    value={cep}
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
                    value={bairro}
                    onChange={setBairro}
                    required
                    placeholder="Digite aqui o bairro do imóvel..."
                    id={"bairro"}
                    rounded
                  ></Input>
                  <Input
                    label={"RUA"}
                    value={rua}
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
                    value={numero}
                    onChange={setNumero}
                    placeholder="Digite aqui o número do imóvel..."
                    id={"numero"}
                    rounded
                  ></Input>
                  <Input
                    label={"DISTÂNCIA DO CEAVI"}
                    value={distanciaCeavi}
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
                    value={areaImovel}
                    label={"ÁREA DO IMÓVEL"}
                    onChange={setAreaImovel}
                    type="number"
                    rounded
                  ></Input>
                  <Input
                    id={"quantidadeQuartos"}
                    value={quantidadeQuartos}
                    label={"QUANTIDADE DE QUARTOS"}
                    onChange={setQuantidadeQuartos}
                    type="number"
                    rounded
                  ></Input>
                  <Input
                    id={"quantidadeBanheiros"}
                    value={quantidadeBanheiros}
                    label={"QUANTIDADE DE BANHEIROS"}
                    onChange={setQuantidadeBanheiros}
                    type="number"
                    rounded
                  ></Input>
                </DividedInput>
                <fieldset>
                  <legend className="text-sm text-gray-600">
                    TIPO DO ALUGUEL DO IMÓVEL
                  </legend>
                </fieldset>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
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
                </div>
                <fieldset>
                  <legend className="text-sm text-gray-600">
                    TIPO DO QUARTO
                  </legend>
                </fieldset>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3 w-full">
                  <Option icon={faUser}>
                    Individual
                    <input
                      type="number"
                      value={quantidadeQuartosIndividuais}
                      onChange={(e) =>
                        setQuantidadeQuartosIndividuais(e.target.value)
                      }
                      min={0}
                      className="text-center focus:outline-none"
                    />
                  </Option>
                  <Option icon={faUserGroup}>
                    Duplo
                    <input
                      type="number"
                      value={quantidadeQuartosDuplos}
                      onChange={(e) =>
                        setQuantidadeQuartosDuplos(e.target.value)
                      }
                      min={0}
                      className="text-center focus:outline-none"
                    />
                  </Option>
                  <Option icon={faUsers}>
                    Triplo
                    <input
                      type="number"
                      value={quantidadeQuartosTriplos}
                      onChange={(e) =>
                        setQuantidadeQuartosTriplos(e.target.value)
                      }
                      min={0}
                      className="text-center focus:outline-none"
                    />
                  </Option>
                </div>
              </BoxInfo>
            </SectionInfo>
          )}
          {step == 3 && (
            <SectionInfo
              description={
                "Informe os detalhes adicionais sobre a sua locação."
              }
              title={"Informações Adicionais"}
            >
              <div className="flex flex-row gap-10 mb-10">
                <BoxInfo
                  title={"Comodidades e Instalações"}
                  icon={faBuilding}
                  className="w-2/3"
                >
                  <Grid
                    elementsList={[
                      {
                        icon: faHouse,
                        title: "Mobiliado",
                        onClick: () => selectItem("Mobiliado"),
                        selected: selectedItems.includes("Mobiliado"),
                      },
                      {
                        icon: faWarehouse,
                        title: "Garagem",
                        onClick: () => selectItem("Garagem"),
                        selected: selectedItems.includes("Garagem"),
                      },
                      {
                        icon: faDog,
                        title: "Aceita pets",
                        onClick: () => selectItem("Aceita pets"),
                        selected: selectedItems.includes("Aceita pets"),
                      },
                      {
                        icon: faSwimmingPool,
                        title: "Piscina",
                        onClick: () => selectItem("Piscina"),
                        selected: selectedItems.includes("Piscina"),
                      },
                      {
                        icon: faGamepad,
                        title: "Área de lazer",
                        onClick: () => selectItem("Área de lazer"),
                        selected: selectedItems.includes("Área de lazer"),
                      },
                      {
                        icon: faElevator,
                        title: "Elevador",
                        onClick: () => selectItem("Elevador"),
                        selected: selectedItems.includes("Elevador"),
                      },
                      {
                        icon: faFireBurner,
                        title: "Churrasqueira",
                        onClick: () => selectItem("Churrasqueira"),
                        selected: selectedItems.includes("Churrasqueira"),
                      },
                      {
                        icon: faDumbbell,
                        title: "Academia",
                        onClick: () => selectItem("Academia"),
                        selected: selectedItems.includes("Academia"),
                      },
                      {
                        icon: faStairs,
                        title: "Escada",
                        onClick: () => selectItem("Escada"),
                        selected: selectedItems.includes("Escada"),
                      },
                      {
                        icon: faVenus,
                        title: "Apenas mulheres",
                        onClick: () => selectItem("Apenas mulheres"),
                        selected: selectedItems.includes("Apenas mulheres"),
                      },
                      {
                        icon: faMars,
                        title: "Apenas homens",
                        onClick: () => selectItem("Apenas homens"),
                        selected: selectedItems.includes("Apenas homens"),
                      },
                    ]}
                  />
                </BoxInfo>
                <BoxInfo title={"Incluídos"} icon={faHouse} className="w-1/3">
                  <div className="flex flex-col gap-5">
                    <Utility
                      icon={faBolt}
                      title={"Eletricidade"}
                      checked={eletricidade}
                      onChange={() => setEletricidade(!eletricidade)}
                    ></Utility>
                    <Utility
                      icon={faDroplet}
                      title={"Água"}
                      checked={agua}
                      onChange={() => setAgua(!agua)}
                    ></Utility>
                    <Utility
                      icon={faWifi}
                      title={"Internet"}
                      checked={internet}
                      onChange={() => setInternet(!internet)}
                    ></Utility>
                    <Utility
                      icon={faFireFlameSimple}
                      title={"Gás"}
                      checked={gas}
                      onChange={() => setGas(!gas)}
                    ></Utility>
                  </div>
                </BoxInfo>
              </div>
              <ButtonForms>Cadastrar</ButtonForms>
            </SectionInfo>
          )}
        </form>
      </Container>
    </>
  );
}

export default CadastroLocacao;
