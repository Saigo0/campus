import LocSpecsCard from "./LocSpecsCard";
import { 
    faCouch, faCar, faDog, faPersonSwimming, faElevator, 
    faDumbbell, faStairs, faWifi, faBolt, faDroplet, faFire, 
    faVenus, faMars, faTree 
} from "@fortawesome/free-solid-svg-icons";

export default function GridLocSpecs({ imovel }) {
    const com = imovel?.comodidades;
    const inc = imovel?.inclusoes;

    if (!com && !inc) return null;

    const specsAtivas = [];

    if (com?.mobiliado) specsAtivas.push({ icon: faCouch, label: "Mobiliado" });
    if (com?.garagem) specsAtivas.push({ icon: faCar, label: "Garagem" });
    if (com?.pets) specsAtivas.push({ icon: faDog, label: "Aceita Pets" });
    if (com?.piscina) specsAtivas.push({ icon: faPersonSwimming, label: "Piscina" });
    if (com?.areaLazer) specsAtivas.push({ icon: faTree, label: "Área de Lazer" });
    if (com?.elevador) specsAtivas.push({ icon: faElevator, label: "Elevador" });
    if (com?.academia) specsAtivas.push({ icon: faDumbbell, label: "Academia" });
    if (com?.escada) specsAtivas.push({ icon: faStairs, label: "Escada" });
    if (com?.apenasMulheres) specsAtivas.push({ icon: faVenus, label: "Só Mulheres" });
    if (com?.apenasHomens) specsAtivas.push({ icon: faMars, label: "Só Homens" });

 
    if (inc?.internet) specsAtivas.push({ icon: faWifi, label: "Internet Inclusa" });
    if (inc?.eletricidade) specsAtivas.push({ icon: faBolt, label: "Luz Inclusa" });
    if (inc?.agua) specsAtivas.push({ icon: faDroplet, label: "Água Inclusa" });
    if (inc?.gas) specsAtivas.push({ icon: faFire, label: "Gás Incluso" });

    return (
        <div className="grid grid-cols-4 gap-7 w-[800px]">

            {specsAtivas.map((spec, index) => (
                <LocSpecsCard 
                    key={index} 
                    specIcon={spec.icon} 
                    specValue={spec.label} 
                />
            ))}
        </div>
    );
}