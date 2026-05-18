import LocCard from "./LocCard"

const imoveisMockados = [
    {
        id: 1,
        img: "/images/mark.jpeg",
        imgAlt: "Foto do imóvel",
        eyebrow: "Imóvel 1",
        title: "Casa em Ibirama",
        pricing: "R$900,00",
        url: "",
    },
    {
        id: 2,
        img: "images/mark.jpeg",
        imgAlt: "Foto do imóvel",
        eyebrow: "Imóvel 2",
        title: "Casa em Ibirama",
        pricing: "R$1.100,00",
        url: "",
    },
    {
        id: 3,
        img: "images/mark.jpeg",
        imgAlt: "Foto do imóvel",
        eyebrow: "Imóvel 3",
        title: "Casa em Ibirama",
        pricing: "R$1.200,00",
        url: "",
    },
    {
        id: 4,
        img: "images/mark.jpeg",
        imgAlt: "Foto do imóvel",
        eyebrow: "Imóvel 4",
        title: "Casa em Ibirama",
        pricing: "R$800,00",
        url: "",
    },
    {
        id: 5,
        img: "images/mark.jpeg",
        imgAlt: "Foto do imóvel",
        eyebrow: "Imóvel 5",
        title: "Casa em Ibirama",
        pricing: "R$1.500,00",
        url: "",
    },
    {
        id: 6,
        img: "images/mark.jpeg",
        imgAlt: "Foto do imóvel",
        eyebrow: "Imóvel 6",
        title: "Casa em Ibirama",
        pricing: "R$850,00",
        url: "",
    }
]

export default function GridLocCards(){
    return(
        <div className= "grid grid-cols-2 sm:grid-cols-2 py-12 gap-10">
            {imoveisMockados.map((imovel) => (
                <LocCard
                    key = {imovel.id}
                    img = {imovel.img}
                    imgAlt = {imovel.imgAlt}
                    eyebrow={imovel.eyebrow}
                    title={imovel.title}
                    pricing={imovel.pricing}
                    url={imovel.url}
                />
            ))}
        </div>
    )
}