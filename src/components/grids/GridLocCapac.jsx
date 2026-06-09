import LocCapacCard from "./LocCapacCard";

export default function GridLocCapac({imovel}){
    return(
        <div className="grid grid-cols-3 gap-7 w-[800px]">
            {imovel.capacityIcons.map((capacityIcon, index) => (
                <LocCapacCard key={index} capacityValue={imovel.capacityValues[index]} capacityIcon={capacityIcon}/>
            ))}
        </div>
    );
}
