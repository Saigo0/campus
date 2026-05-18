import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BoxInfo({children, title, icon}){
return(
    <div className="bg-white p-7 w-full rounded-3xl">
        <div className="flex flex-row gap-2 items-center mb-5">
            <FontAwesomeIcon icon={icon} className="text-[#1B3B99]"></FontAwesomeIcon>
            <h3 className="font-bold">{title}</h3>
        </div>
        {children}
    </div>
)
}

export default BoxInfo;