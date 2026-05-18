import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Option({icon, children, onClick, selected, type = "imovel"}){
    return(
        <div className={`py-3 px-5 rounded-xl flex flex-col justify-center items-center ${type=="room" ? "w-1/3" : "w-1/4"} ${selected ? "bg-[#CCC9FF]" : "bg-[#F2EFFF]"}`} onClick={onClick}>
            <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
            {children}
        </div>
    )
}

export default Option;