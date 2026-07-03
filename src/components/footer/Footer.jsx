import Logo from "@/components/logo/Logo";
import { faGlobe, faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer(){
    return(
        <footer className="bg-[#DCE1FF] dark:bg-[#03132c] flex flex-col md:flex-row items-center justify-between py-10 px-4 md:px-16 mt-10 gap-8">
            
            <div>
                <Logo></Logo>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-center">
                <span className="text-[#83878E] dark:text-white cursor-pointer hover:underline transition-all">Políticas de Privacidade</span>
                <span className="text-[#83878E] dark:text-white cursor-pointer hover:underline transition-all">Termos de Serviço</span>
                <span className="text-[#83878E] dark:text-white cursor-pointer hover:underline transition-all">Entre em contato</span>
            </div>
            
            <div className="flex flex-row items-center gap-6">
                <FontAwesomeIcon icon={faGlobe} className="text-[#1B3B99] dark:text-[#819BFF] text-3xl cursor-pointer hover:scale-110 transition-transform"></FontAwesomeIcon>
                <FontAwesomeIcon icon={faShare} className="text-[#1B3B99] dark:text-[#819BFF] text-3xl cursor-pointer hover:scale-110 transition-transform"></FontAwesomeIcon>
            </div>
            
        </footer>
    )
}