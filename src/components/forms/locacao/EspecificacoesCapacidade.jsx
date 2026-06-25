import SectionInfo from "@/components/forms/SectionInfo";
import BoxInfo from "@/components/forms/InfoBox";
import Input from "@/components/inputs/Input";
import DividedInput from "@/components/inputs/DividedInput";
import Option from "@/components/forms/Option";
import {
  faHouse,
  faBuilding,
  faBed,
  faUser,
  faUserGroup,
  faUsers,
  faDoorOpen,
  faArrowRight,
  faArrowLeft,
  faStarOfLife,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons/faInfoCircle";

export default function EspecificacoesCapacidade({
  cidade,
  setCidade,
  cep,
  setCep,
  bairro,
  setBairro,
  rua,
  setRua,
  numero,
  setNumero,
  distanciaCeavi,
  setDistanciaCeavi,
  areaImovel,
  setAreaImovel,
  quantidadeQuartos,
  setQuantidadeQuartos,
  quantidadeBanheiros,
  setQuantidadeBanheiros,
  tipoQuarto,
  setTipoQuarto,
  tipoImovel,
  setTipoImovel,
  setStep,
  errors = {},
}) {
  function goToTheNext() {
    setStep((prev) => prev + 1);
  }

  function goToThePrevious() {
    setStep((prev) => prev - 1);
  }

  return (
    <SectionInfo
      description={"Informe os detalhes acerca da capacidade da sua locação."}
      title={"Especificações de capacidade"}
      className="flex flex-col gap-10"
    >
      {errors.geral && (
        <div className="mb-4 p-3 rounded-md bg-red-100 text-red-600 text-sm">
          {errors.geral}
        </div>
      )}
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
            error={errors.cidade}
          ></Input>
          <Input
            label={"CEP"}
            value={cep}
            onChange={setCep}
            required
            placeholder="Digite aqui o CEP do imóvel..."
            id={"cep"}
            rounded
            error={errors.cep}
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
            error={errors.bairro}
          ></Input>
          <Input
            label={"RUA"}
            value={rua}
            onChange={setRua}
            required
            placeholder="Digite aqui a rua do imóvel..."
            id={"rua"}
            rounded
            error={errors.rua}
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
            label={"DISTÂNCIA DO CEAVI EM METROS"}
            value={distanciaCeavi}
            onChange={setDistanciaCeavi}
            required
            type="number"
            placeholder="Digite aqui a distância do CEAVI até o imóvel..."
            id={"distanciaCeavi"}
            error={errors.distanciaCeavi}
            rounded
          ></Input>
        </DividedInput>
      </BoxInfo>
      <BoxInfo title={"Especificações do imóvel"} icon={faHouse}>
        <DividedInput>
          <Input
            id={"areaImovel"}
            value={areaImovel}
            label={"ÁREA DO IMÓVEL EM METROS QUADRADOS"}
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
        <div>
          <fieldset className="w-full">
            <legend className="text-sm text-gray-600 dark:text-white flex items-center gap-1">
              TIPO DO ALUGUEL DO IMÓVEL
              <FontAwesomeIcon
                className="text-red-600 text-[10px]"
                icon={faStarOfLife}
              />
            </legend>
          </fieldset>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
            <Option
              icon={faHouse}
              onClick={() => setTipoImovel("CASA")}
              selected={tipoImovel === "CASA"}
            >
              Casa
            </Option>
            <Option
              icon={faBuilding}
              onClick={() => setTipoImovel("APARTAMENTO")}
              selected={tipoImovel === "APARTAMENTO"}
            >
              Apartamento
            </Option>
            <Option
              icon={faDoorOpen}
              onClick={() => setTipoImovel("KITNET")}
              selected={tipoImovel === "KITNET"}
            >
              Kitnet
            </Option>
            <Option
              icon={faBed}
              onClick={() => setTipoImovel("QUARTO")}
              selected={tipoImovel === "QUARTO"}
            >
              Quarto
            </Option>
          </div>
          {errors.tipoImovel && (
            <span className="text-red-500 text-xs mt-1">
              {errors.tipoImovel}
            </span>
          )}
        </div>
        {tipoImovel === "QUARTO" && (
          <>
            <fieldset>
              <legend className="text-sm text-gray-600">TIPO DO QUARTO</legend>
            </fieldset>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3 w-full">
              <Option
                icon={faUser}
                onClick={() => setTipoQuarto("INDIVIDUAL")}
                selected={tipoQuarto === "INDIVIDUAL"}
              >
                Individual
              </Option>
              <Option
                icon={faUserGroup}
                onClick={() => setTipoQuarto("DUPLO")}
                selected={tipoQuarto === "DUPLO"}
              >
                Duplo
              </Option>
              <Option
                icon={faUsers}
                onClick={() => setTipoQuarto("TRIPLO")}
                selected={tipoQuarto === "TRIPLO"}
              >
                Triplo
              </Option>
            </div>
          </>
        )}
      </BoxInfo>
      <div className="flex gap-5">
        <FontAwesomeIcon
          className="text-white rounded-3xl bg-linear-to-r from-[#1B3B99] to-[#819BFF] dark:from-[#b6c4ff] dark:text-black dark:to-[#819BFF] w-full p-2"
          icon={faArrowLeft}
          onClick={goToThePrevious}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          className="text-white rounded-3xl bg-linear-to-r from-[#1B3B99] to-[#819BFF] dark:from-[#b6c4ff] dark:text-black dark:to-[#819BFF] w-full p-2"
          icon={faArrowRight}
          onClick={goToTheNext}
        ></FontAwesomeIcon>
      </div>
    </SectionInfo>
  );
}
