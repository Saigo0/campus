import LocCard from "./LocCard";

export default function GridLocCards({ imoveis }){
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 py-12 gap-10">
            {imoveis.map((imovel) => (
                <LocCard
                    key={imovel.id}
                    imovel={imovel}
                />
            ))}
        </div>
    )
}