import LocCapacCard from "./LocCapacCard";
import { faBed, faBath, faBorderAll } from "@fortawesome/free-solid-svg-icons";

export default function GridLocCapac({ imovel }) {

    const esp = imovel?.especificacoes;

    if (!esp) return null;

    return (
        <div className="grid grid-cols-3 gap-7 w-[800px]">

            {esp.quantQuartos > 0 && (
                <LocCapacCard 
                    capacityValue={`${esp.quantQuartos} ${esp.quantQuartos === 1 ? 'Quarto' : 'Quartos'}`} 
                    capacityIcon={faBed} 
                />
            )}

            {esp.quantBanheiros > 0 && (
                <LocCapacCard 
                    capacityValue={`${esp.quantBanheiros} ${esp.quantBanheiros === 1 ? 'Banheiro' : 'Banheiros'}`} 
                    capacityIcon={faBath} 
                />
            )}

            {esp.areaMetrosQuad > 0 && (
                <LocCapacCard 
                    capacityValue={`${esp.areaMetrosQuad} m²`} 
                    capacityIcon={faBorderAll} 
                />
            )}
        </div>
    );
}