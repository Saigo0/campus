import { faStarOfLife } from "@fortawesome/free-solid-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeIcons,
} from "@fortawesome/react-fontawesome";

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
  error,
}) {
  return (
    <div className="flex flex-col w-full mb-3">
      <div className="flex justify-between text-sm">
        <label className="dark:text-white text-gray-600 items-center justify-center flex gap-1" htmlFor={id}>
          {label}
          {required && (
            <FontAwesomeIcon
              className="text-red-600 text-[10px]"
              icon={faStarOfLife}
            />
          )}
        </label>
        {forgot && <span className="text-[#1B3B99]">Esqueceu a senha?</span>}
      </div>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        min={0}
        onChange={(e) => onChange(e.target.value)}
        className={`py-3 px-3 text-sm focus:outline-none ${
          error
            ? "border border-red-500 focus:ring-red-300"
            : "bg-[#F2EFFF] dark:bg-[#131318] focus:ring-[#1B3B99]/20"
        } ${rounded ? "rounded-3xl" : "rounded-none"}`}
      />
      {error && <span className="text-red-500 text-xs mt-1">{error}</span>}
    </div>
  );
}

export default Input;
