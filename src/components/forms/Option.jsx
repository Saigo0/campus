import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Option({icon, children}){
    return(
        <div className="bg-[#F2EFFF] py-3 px-5 rounded-xl flex flex-col justify-center items-center w-full">
            <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
            {children}
        </div>
    )
}

export default Option;