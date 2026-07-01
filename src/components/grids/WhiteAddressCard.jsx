export default function WhiteAddressCard({ imovel }) {
    
    const end = imovel?.endereco;

    return (
        <div className="bg-white dark:bg-[#1f1f25] p-7 rounded-3xl w-full flex flex-col gap-5 shadow-sm">
            <div className="flex flex-col">
                <span className="text-[#9D9DB5] dark:text-gray-400 text-xs font-bold">RUA</span>
                <span className="text-[#2A2B51] dark:text-white font-bold text-lg">
                    {end?.rua || "Não informada"}
                </span>
            </div>
            <div className="flex flex-col">
                <span className="text-[#9D9DB5] dark:text-gray-400 text-xs font-bold">BAIRRO</span>
                <span className="text-[#2A2B51] dark:text-white font-bold text-lg">
                    {end?.bairro || "Não informado"}
                </span>
            </div>
            <div className="flex flex-col">
                <span className="text-[#9D9DB5] dark:text-gray-400 text-xs font-bold">NÚMERO</span>
                <span className="text-[#2A2B51] dark:text-white font-bold text-lg">
                    {end?.numero || "S/N"}
                </span>
            </div>
        </div>
    )
}