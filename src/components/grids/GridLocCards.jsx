import LocCard from "./LocCard"




export default function GridLocCards({ imoveisMockados }){
    return(
        <div className= "grid grid-cols-2 sm:grid-cols-2 py-12 gap-10">
            {imoveisMockados.map((imovel) => (
                <LocCard
                    key={imovel.id}
                    imovel={imovel}
                />
            ))}
        </div>
    )
}