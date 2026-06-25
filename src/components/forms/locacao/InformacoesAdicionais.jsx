import SectionInfo from "@/components/forms/SectionInfo";
import BoxInfo from "@/components/forms/InfoBox";
import {
  faHouse,
  faBuilding,
  faWarehouse,
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
  faDumbbell,
  faFireBurner,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";
import Grid from "@/components/forms/Grid";
import Utility from "@/components/forms/Utility";
import ButtonForms from "@/components/buttons/ButtonForms";

export default function InformacoesAdicionais({
  selectedItems,
  setSelectedItems,
  eletricidade,
  setEletricidade,
  agua,
  setAgua,
  internet,
  setInternet,
  gas,
  setGas,
  errors
}) {
  function selectItem(description) {
    setSelectedItems((prev) => {
      return prev.includes(description)
        ? prev.filter((i) => i != description)
        : [...prev, description];
    });
  }

  return (
    <SectionInfo
      description={"Informe os detalhes adicionais sobre a sua locação."}
      title={"Informações Adicionais"}
    >
      {errors.geral && (
        <div className="mb-4 p-3 rounded-md bg-red-100 text-red-600 text-sm">
          {errors.geral}
        </div>
      )}
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
  );
}
