import { FaSearch } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faBed, faDog } from '@fortawesome/free-solid-svg-icons';


export default function LocCard({img, imgAlt, description, title, pricing, url, icons}){
    return(
      <div>
        <img className="rounded-t-3xl w-[400px] h-[200px] object-cover" src={img} alt={imgAlt}/>
        <div className=" rounded-b-3xl py-4 px-4 bg-white shadow-xl">
          <div className="flex flex-row">
            <div className="mt-1 font-bold text-gray-700">
              <a href={url} className="hover:underline">
                {title}
              </a>
            </div>
            <div className="text-md font-extrabold text-blue-500 py-1 ml-auto">{pricing}</div>
          </div>
          
          <div className="mt-2 text-md text-gray-600">{description}</div>
          <div className=" flex flex-row mt-4 mb-2">
            {icons.map((icon, index) => (
              <div key={index} className="flex items-center mr-2 border border-black py-1 px-2 rounded-xl">
                <FontAwesomeIcon icon={icon} className="text-black mr-1 w-[16px] h-[16px]" />
                <span className="text-xs text-black">{icon === faHouse ? "Casa" : icon === faBed ? "2" : icon === faDog ? "Pets" : ""}</span>
              </div>
            ))}
          </div>
        </div>
    </div>
    )
}