import { faStarOfLife } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon, FontAwesomeIcons} from "@fortawesome/react-fontawesome";

function Input({
  label,
  id,
  value,
  type = "text",
  placeholder = "",
  onChange,
  required = false,
  forgot = false,
  rounded = false,
}) {
  return (
    <div className="flex flex-col w-full mb-3">
      <div className="flex justify-between text-sm">
        <label className="text-gray-600" htmlFor={id}>{label}{required && (<FontAwesomeIcon className="text-red-600 text-[10px" icon={faStarOfLife} />)}</label>
        {forgot && <span className="text-[#1B3B99]">Esqueceu a senha?</span>}
      </div>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        min={0}
        onChange={(e) => onChange(e.target.value)}
        className={`bg-[#F2EFFF] py-3 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3B99]/20 ${
          rounded ? "rounded-3xl" : "rounded-none"
        }`}
      />
    </div>
  );
}

export default Input;
