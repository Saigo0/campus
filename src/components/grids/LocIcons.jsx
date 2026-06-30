import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBed, faDog, faBath, faBorderAll } from '@fortawesome/free-solid-svg-icons';

export default function LocIcons({ especificacoes, comodidades }) {
  return (
    <div className="flex flex-wrap gap-2 mt-auto pt-4">

      {especificacoes?.tipoAluguel && (
        <div className="flex items-center border border-black dark:border-white py-1 px-2 rounded-xl">
          <FontAwesomeIcon icon={faHouse} className="text-black dark:text-white mr-1 w-[14px] h-[14px]" />
          <span className="text-xs text-black dark:text-white font-medium capitalize">
            {especificacoes.tipoAluguel.toLowerCase()}
          </span>
        </div>
      )}

      {especificacoes?.quantQuartos > 0 && (
        <div className="flex items-center border border-black dark:border-white py-1 px-2 rounded-xl">
          <FontAwesomeIcon icon={faBed} className="text-black dark:text-white mr-1 w-[14px] h-[14px]" />
          <span className="text-xs text-black dark:text-white font-medium">
            {especificacoes.quantQuartos}
          </span>
        </div>
      )}

      {especificacoes?.quantBanheiros > 0 && (
        <div className="flex items-center border border-black dark:border-white py-1 px-2 rounded-xl">
          <FontAwesomeIcon icon={faBath} className="text-black dark:text-white mr-1 w-[14px] h-[14px]" />
          <span className="text-xs text-black dark:text-white font-medium">
            {especificacoes.quantBanheiros}
          </span>
        </div>
      )}

      {especificacoes?.areaMetrosQuad > 0 && (
        <div className="flex items-center border border-black dark:border-white py-1 px-2 rounded-xl">
          <FontAwesomeIcon icon={faBorderAll} className="text-black dark:text-white mr-1 w-[14px] h-[14px]" />
          <span className="text-xs text-black dark:text-white font-medium">
            {especificacoes.areaMetrosQuad}m²
          </span>
        </div>
      )}

      {comodidades?.pets && (
        <div className="flex items-center border border-black dark:border-white py-1 px-2 rounded-xl">
          <FontAwesomeIcon icon={faDog} className="text-black dark:text-white mr-1 w-[14px] h-[14px]" />
          <span className="text-xs text-black dark:text-white font-medium">
            Pets
          </span>
        </div>
      )}

    </div>
  );
}