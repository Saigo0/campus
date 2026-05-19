import Logo from "@/components/logo/Logo";

export default function Footer(){
    return(
        <footer className="bg-[#DCE1FF] flex flex-row items-center justify-between p-15">
            <div className="ml-8">
                <Logo></Logo>
            </div>
            
            <div className="flex flex-row">
                <span className="text-[#83878E] p-4">Políticas de Privacidade</span>
                <span className="text-[#83878E] p-4">Termos de Serviço</span>
                <span className="text-[#83878E] p-4">Entre em contato</span>
            </div>
            <div className="flex flex-row items-center gap-5 mr-8">
                <img src="/images/globe.png" width={28} height={28} alt="Globo"/>
                <img src="/images/share.png" alt="Compartilhar" height={28} width={28} />
            </div>
        </footer>
    )
}