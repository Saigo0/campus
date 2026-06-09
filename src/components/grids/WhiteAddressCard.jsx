export default function WhiteAddressCard({imovel}) {
    return (
        <div className="bg-white dark:bg-[#1f1f25] p-7 rounded-3xl w-full flex flex-col gap-5">
            <div className="flex flex-col">
                <span className="text-[#9D9DB5] dark:text-white text-xs font-bold">RUA</span>
                <span className="text-[#2A2B51] dark:text-white font-bold text-lg">{imovel.rua}</span>
            </div>
            <div className="flex flex-col">
                <span className="text-[#9D9DB5] dark:text-white text-xs font-bold">BAIRRO</span>
                <span className="text-[#2A2B51] dark:text-white font-bold text-lg">{imovel.bairro}</span>
            </div>
            <div className="flex flex-col">
                <span className="text-[#9D9DB5] dark:text-white text-xs font-bold">NÚMERO</span>
                <span className="text-[#2A2B51] dark:text-white font-bold text-lg">{imovel.numero}</span>
            </div>
        </div>
    )
}
