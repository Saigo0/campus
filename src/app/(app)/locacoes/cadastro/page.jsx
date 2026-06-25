"use client";

import Container from "@/components/Container";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Erro from "@/components/warnings/Erro";
import InformacoesGerais from "@/components/forms/locacao/InformacoesGerais";
import EspecificacoesCapacidade from "@/components/forms/locacao/EspecificacoesCapacidade";
import InformacoesAdicionais from "@/components/forms/locacao/InformacoesAdicionais";
import Navigation from "@/components/forms/navegacao/Navigation";
import { useAuth } from "@/app/context/AuthContext";
import api from "@/app/utils/api";

function CadastroLocacao() {
  const [id, setId] = useState();
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
  const [tipoImovel, setTipoImovel] = useState("");
  const [tipoQuarto, setTipoQuarto] = useState("");

  const [eletricidade, setEletricidade] = useState(false);
  const [agua, setAgua] = useState(false);
  const [internet, setInternet] = useState(false);
  const [gas, setGas] = useState(false);

  const [step, setStep] = useState(1);

  const { isAuthenticated, loading } = useAuth();
  const router = useRouter();

  const [selectedItems, setSelectedItems] = useState([]);

  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [files, setFiles] = useState([]);

  function handleImage(e) {
    const selectedFiles = Array.from(e.target.files || []);

    setFiles((prev) => [...prev, ...selectedFiles]);

    const newImages = selectedFiles.map((file) => ({
      url: URL.createObjectURL(file),
    }));

    setImages((prev) => {
      const updated = [...prev, ...newImages];

      if (!selectedImage || updated.length === 1) {
        setSelectedImage(updated[0]);
      }

      return updated;
    });
  }

  const options = [
    { value: "3m", label: "3 meses" },
    { value: "6m", label: "6 meses" },
    { value: "12m", label: "12 meses" },
  ];

  async function registerLocacao(e) {
    e.preventDefault();

    if (!validateData()) {
      return;
    }

    try {
      const formData = new FormData();

      formData.append("idLocador", id);

      formData.append("dadosGerais.titulo", titulo);
      formData.append("dadosGerais.descricao", descricao);
      formData.append("dadosGerais.regras", regras);
      formData.append("dadosGerais.valorCondominio", taxaCondominio || 0);
      formData.append("dadosGerais.valorAluguel", aluguel || 0);

      formData.append("endereco.cidade", cidade);
      formData.append("endereco.distanciaCeavi", distanciaCeavi || 0);
      formData.append("endereco.numero", numero);
      formData.append("endereco.rua", rua);
      formData.append("endereco.bairro", bairro);
      formData.append("endereco.cep", cep);

      formData.append("especificacoes.areaMetrosQuad", areaImovel || 0);
      formData.append("especificacoes.tipoQuarto", tipoQuarto);
      formData.append("especificacoes.tipoAluguel", tipoImovel);
      formData.append(
        "especificacoes.quantBanheiros",
        quantidadeBanheiros || 0,
      );
      formData.append("especificacoes.quantQuartos", quantidadeQuartos || 0);

      formData.append(
        "comodidades.mobiliado",
        selectedItems.includes("Mobiliado"),
      );
      formData.append("comodidades.garagem", selectedItems.includes("Garagem"));
      formData.append(
        "comodidades.pets",
        selectedItems.includes("Aceita pets"),
      );
      formData.append("comodidades.piscina", selectedItems.includes("Piscina"));
      formData.append(
        "comodidades.areaLazer",
        selectedItems.includes("Área de lazer"),
      );
      formData.append(
        "comodidades.elevador",
        selectedItems.includes("Elevador"),
      );
      formData.append(
        "comodidades.churrasqueira",
        selectedItems.includes("Churrasqueira"),
      );
      formData.append(
        "comodidades.academia",
        selectedItems.includes("Academia"),
      );
      formData.append("comodidades.escada", selectedItems.includes("Escada"));
      formData.append(
        "comodidades.apenasMulheres",
        selectedItems.includes("Apenas mulheres"),
      );
      formData.append(
        "comodidades.apenasHomens",
        selectedItems.includes("Apenas homens"),
      );

      formData.append("inclusoes.eletricidade", eletricidade);
      formData.append("inclusoes.agua", agua);
      formData.append("inclusoes.internet", internet);
      formData.append("inclusoes.gas", gas);

      files.forEach((file) => {
        formData.append("files", file);
      });

      const res = await api.post("/imoveis", formData);
    } catch (err) {
      const newErrors = {};
      newErrors.geral =
        "Não foi possível cadastrar a locação, tente novamente mais tarde.";
      setErro(newErrors);
    }
  }

  const [erro, setErro] = useState(false);

  function validateData() {
    const newErrors = {};

    if (!titulo.trim()) {
      newErrors.titulo = "O título é obrigatório.";
    }

    if (!descricao.trim()) {
      newErrors.descricao = "A descrição é obrigatória.";
    }

    if (!cidade.trim()) {
      newErrors.cidade = "A cidade é obrigatória.";
    }

    if (!bairro.trim()) {
      newErrors.bairro = "O bairro é obrigatório.";
    }

    if (!rua.trim()) {
      newErrors.rua = "A rua é obrigatória.";
    }

    if (!cep.trim()) {
      newErrors.cep = "O CEP é obrigatório.";
    }

    if (!tipoImovel) {
      newErrors.tipoImovel = "Selecione um tipo de imóvel.";
    }

    if (!aluguel.trim()) {
      newErrors.aluguel = "O valor do aluguel é obrigatório.";
    }

    if (!distanciaCeavi.trim()) {
      newErrors.distanciaCeavi = "A distância do CEAVI é obrigatória.";
    }

    if (Object.keys(newErrors).length > 0) {
      newErrors.geral =
        "Não foi possível cadastrar locação. Há dados obrigatórios em branco.";
    }
    
    setErro(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  useEffect(() => {
    setId(Number(localStorage.getItem("id")));
    if (!loading && !isAuthenticated) {
      router.push("/login");
    }
    const valorAluguel = Number(aluguel) || 0;
    const valorCondominio = condominio ? Number(taxaCondominio) || 0 : 0;

    setTotal(valorAluguel + valorCondominio);
  }, [loading, isAuthenticated, router, aluguel, taxaCondominio, condominio]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!isAuthenticated) {
    return null;
  }

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
          {step == 1 && (
            <InformacoesGerais
              setStep={setStep}
              setImages={setImages}
              setSelectedImage={setSelectedImage}
              selectedImage={selectedImage}
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
              errors={erro}
            ></InformacoesGerais>
          )}
          {step == 2 && (
            <EspecificacoesCapacidade
              setStep={setStep}
              areaImovel={areaImovel}
              bairro={bairro}
              cep={cep}
              cidade={cidade}
              distanciaCeavi={distanciaCeavi}
              numero={numero}
              quantidadeBanheiros={quantidadeBanheiros}
              quantidadeQuartos={quantidadeQuartos}
              tipoQuarto={tipoQuarto}
              rua={rua}
              setAreaImovel={setAreaImovel}
              setBairro={setBairro}
              setCep={setCep}
              setCidade={setCidade}
              setDistanciaCeavi={setDistanciaCeavi}
              setNumero={setNumero}
              setQuantidadeBanheiros={setQuantidadeBanheiros}
              setQuantidadeQuartos={setQuantidadeQuartos}
              setTipoQuarto={setTipoQuarto}
              setRua={setRua}
              setTipoImovel={setTipoImovel}
              tipoImovel={tipoImovel}
              errors={erro}
            ></EspecificacoesCapacidade>
          )}
          {step == 3 && (
            <InformacoesAdicionais
              setStep={setStep}
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
              errors={erro}
            ></InformacoesAdicionais>
          )}
        </form>
      </Container>
    </>
  );
}

export default CadastroLocacao;
