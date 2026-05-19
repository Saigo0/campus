import LocCard from "./LocCard"




export default function GridLocCards({ imoveisMockados }){
    return(
        <div className= "grid grid-cols-2 sm:grid-cols-2 py-12 gap-10">
            {imoveisMockados.map((imovel) => (
                <LocCard
                    key = {imovel.id}
                    img = {imovel.img}
                    imgAlt = {imovel.imgAlt}
                    description={imovel.description}
                    title={imovel.title}
                    pricing={imovel.pricing}
                    url={imovel.url}
                    approvement={imovel.approvement}
                    icons={imovel.icons}
                />
            ))}
        </div>
    )
}