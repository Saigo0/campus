import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Grid({elementsList}){
    return(
        <div className="w-full grid-cols-3">
            {elementsList.map((element, index) => (
                <div key={index}>
                    <FontAwesomeIcon icon={element.icon}></FontAwesomeIcon>
                    {element.title}
                </div>
            ))}
        </div>
    )
}

export default Grid;