import Logo from "@/components/logo/Logo";
import { faGlobe, faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer(){
    return(
        <footer className="bg-[#DCE1FF] dark:bg-[#03132c] flex flex-row items-center justify-between p-15 mt-10">
            <div className="ml-8">
                <Logo></Logo>
            </div>
            
            <div className="flex flex-row">
                <span className="text-[#83878E] dark:text-white p-4">Políticas de Privacidade</span>
                <span className="text-[#83878E] dark:text-white p-4">Termos de Serviço</span>
                <span className="text-[#83878E] dark:text-white p-4">Entre em contato</span>
            </div>
            <div className="flex flex-row items-center gap-5 mr-8">
                <FontAwesomeIcon icon={faGlobe} className="text-[#1B3B99] dark:text-[#819BFF] text-3xl"></FontAwesomeIcon>
                <FontAwesomeIcon icon={faShare} className="text-[#1B3B99] dark:text-[#819BFF] text-3xl"></FontAwesomeIcon>
            </div>
        </footer>
    )
}