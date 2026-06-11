import {
  faHouse,
  faMoneyBill,
  faAddressBook,
  faPhotoFilm,
} from "@fortawesome/free-solid-svg-icons";
import Carrossel from "@/components/forms/Carrossel";
import Select from "@/components/forms/Select";
import TextArea from "@/components/inputs/TextArea";
import SectionInfo from "@/components/forms/SectionInfo";
import BoxInfo from "@/components/forms/InfoBox";
import Input from "@/components/inputs/Input";

export default function InformacoesGerais({
  titulo,
  setTitulo,
  descricao,
  setDescricao,
  regras,
  setRegras,
  aluguel,
  setAluguel,
  options,
  setTempoContratoMinimo,
  tempoContratoMinimo,
  condominio,
  taxaCondominio,
  setTaxaCondominio,
  handleImage,
  images,
  setCondominio,
  total,
  setTotal
}) {
  return (
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
            <label htmlFor="tempoContrato" className="text-sm text-gray-600">
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
  );
}
