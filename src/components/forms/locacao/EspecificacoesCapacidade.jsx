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
} from "@fortawesome/free-solid-svg-icons";
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
}) {
  return (
    <SectionInfo
      description={"Informe os detalhes acerca da capacidade da sua locação."}
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
    </SectionInfo>
  );
}
