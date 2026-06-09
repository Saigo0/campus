import WhiteAddressCard from "./WhiteAddressCard";
import BlueAddressCard from "./BlueAddressCard";

export default function GridAddress({imovel}) {
    return (
        <div className="flex flex-row gap-8 w-[800px]">
            <WhiteAddressCard imovel={imovel} />
            <BlueAddressCard imovel={imovel} />
        </div>
    )
}
