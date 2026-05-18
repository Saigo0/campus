import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Utility({icon, title}){
    return(
        <div>
            <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
            {title}
        </div>
    )
}

export default Utility;