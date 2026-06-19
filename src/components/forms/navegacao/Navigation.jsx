import NavigationOption from "./NavigationOption";

export default function Navigation({ step, setStep }) {
  return (
    <nav className=" dark:text-white w-3/4 mx-auto">
      <ol className="flex flex-row justify-between">
        <NavigationOption
          setStep={setStep}
          step={step}
          stepEqualTo={1}
          title={"Informações Gerais"}
        ></NavigationOption>
        <NavigationOption
          setStep={setStep}
          step={step}
          stepEqualTo={2}
          title={"Esp. de Capacidade"}
        ></NavigationOption>
        <NavigationOption
          setStep={setStep}
          step={step}
          stepEqualTo={3}
          title={"Informações Adicionais"}
        ></NavigationOption>
      </ol>
    </nav>
  );
}
