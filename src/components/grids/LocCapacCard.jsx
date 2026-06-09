import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LocCapacCard({capacityValue, capacityIcon}){
    return(
        <div className="bg-white dark:bg-[#1f1f25] flex flex-col rounded-3xl items-center py-6 px-28 gap-3 shadow-sm">
            <FontAwesomeIcon icon={capacityIcon} className="mr-1 w-[16px] h-[16px] dark:text-[#819BFF] text-[#004AE5]" />
            <span className="text-[#2A2B51] dark:text-white">{capacityValue}</span>
        </div>
    );
}
