import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LocSpecsCard({ specValue, specIcon }) {
    return (
        <div className="bg-white dark:bg-[#1f1f25] flex flex-col rounded-4xl items-center py-6 gap-3 shadow-sm text-center">
            <FontAwesomeIcon icon={specIcon} className="mr-1 w-[16px] h-[16px] dark:text-[#819BFF] text-[#004AE5]" />
            <span className="text-[#2A2B51] dark:text-white">{specValue}</span>
        </div>
    );
}