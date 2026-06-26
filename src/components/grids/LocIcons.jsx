import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse, faBed, faDog, faBath, faBorderAll} from '@fortawesome/free-solid-svg-icons';

export default function LocIcons({icons}){
    return (
        <div className="flex flex-wrap gap-2 mt-auto pt-4">
            {icons?.map((icon, index) => (
                <div key={index} className="flex items-center border border-black dark:border-white py-1 px-2 rounded-xl">
                  <FontAwesomeIcon icon={icon} className="text-black dark:text-white mr-1 w-[14px] h-[14px]"/>
                  
                  <span className="text-xs text-black dark:text-white font-medium">
                    {icon.iconName === faHouse.iconName ? "Casa" : 
                     icon.iconName === faBed.iconName ? "2" : 
                     icon.iconName === faDog.iconName ? "Pets" : 
                     icon.iconName === faBath.iconName ? "2" : 
                     icon.iconName === faBorderAll.iconName ? "40m²" : ""}
                  </span>
                  
                </div>
            ))}
        </div>
    );
}