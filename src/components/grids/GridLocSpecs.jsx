import LocSpecsCard from "./LocSpecsCard"

export default function GridLocSpecs({imovel}){
    return(
        <div className="grid grid-cols-4 gap-7 w-[800px]">
            {imovel.specsIcons.map((specIcon, index) => (
                <LocSpecsCard key={index} specIcon={specIcon} specValue={imovel.specsValues[index]} />
            ))}
        </div>
    )
}
