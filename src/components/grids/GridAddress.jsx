import WhiteAddressCard from "./WhiteAddressCard";
import BlueAddressCard from "./BlueAddressCard";

export default function GridAddress({imovel}) {
    return (
        <div className="flex flex-col md:flex-row gap-4 lg:gap-8 w-full lg:w-[800px]">
            <WhiteAddressCard imovel={imovel} />
            <BlueAddressCard imovel={imovel} />
        </div>
    )
}
