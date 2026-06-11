"use client";

import Container from "@/components/Container";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Erro from "@/components/warnings/Erro";
import InformacoesGerais from "@/components/forms/locacao/InformacoesGerais";
import EspecificacoesCapacidade from "@/components/forms/locacao/EspecificacoesCapacidade";
import InformacoesAdicionais from "@/components/forms/locacao/InformacoesAdicionais";
import Navigation from "@/components/forms/navegacao/Navigation";

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
        <Navigation setStep={setStep} step={step}></Navigation>
        <form onSubmit={registerLocacao}>
          <Erro erro={erro} conteudo={conteudoErro}></Erro>
          {step == 1 && (
            <InformacoesGerais
              aluguel={aluguel}
              setAluguel={setAluguel}
              condominio={condominio}
              descricao={descricao}
              handleImage={handleImage}
              images={images}
              options={options}
              regras={regras}
              setDescricao={setDescricao}
              setRegras={setRegras}
              setTaxaCondominio={setTaxaCondominio}
              setTempoContratoMinimo={setTempoContratoMinimo}
              setTitulo={setTitulo}
              taxaCondominio={taxaCondominio}
              tempoContratoMinimo={tempoContratoMinimo}
              titulo={titulo}
              setCondominio={setCondominio}
              total={total}
              setTotal={setTotal}
            ></InformacoesGerais>
          )}
          {step == 2 && (
            <EspecificacoesCapacidade
              areaImovel={areaImovel}
              bairro={bairro}
              cep={cep}
              cidade={cidade}
              distanciaCeavi={distanciaCeavi}
              numero={numero}
              quantidadeBanheiros={quantidadeBanheiros}
              quantidadeQuartos={quantidadeQuartos}
              quantidadeQuartosDuplos={quantidadeQuartosDuplos}
              quantidadeQuartosIndividuais={quantidadeQuartosIndividuais}
              quantidadeQuartosTriplos={quantidadeQuartosDuplos}
              rua={rua}
              setAreaImovel={setAreaImovel}
              setBairro={setBairro}
              setCep={setCep}
              setCidade={setCidade}
              setDistanciaCeavi={setDistanciaCeavi}
              setNumero={setNumero}
              setQuantidadeBanheiros={setQuantidadeBanheiros}
              setQuantidadeQuartos={setQuantidadeQuartos}
              setQuantidadeQuartosDuplos={setQuantidadeQuartosDuplos}
              setQuantidadeQuartosIndividuais={setQuantidadeQuartosIndividuais}
              setQuantidadeQuartosTriplos={setQuantidadeQuartosTriplos}
              setRua={setRua}
              setTipoImovel={setTipoImovel}
              tipoImovel={tipoImovel}
            ></EspecificacoesCapacidade>
          )}
          {step == 3 && (
            <InformacoesAdicionais
              agua={agua}
              eletricidade={eletricidade}
              gas={gas}
              internet={internet}
              selectedItems={selectedItems}
              setAgua={setAgua}
              setEletricidade={setEletricidade}
              setGas={setGas}
              setInternet={setInternet}
              setSelectedItems={setSelectedItems}
            ></InformacoesAdicionais>
          )}
        </form>
      </Container>
    </>
  );
}

export default CadastroLocacao;
