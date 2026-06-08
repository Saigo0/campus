import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarOfLife } from "@fortawesome/free-solid-svg-icons";

function TextArea({
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
        <label htmlFor={id} className="dark:text-white text-gray-600">
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
      <textarea
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        min={0}
        onChange={(e) => onChange(e.target.value)}
        className={`bg-[#F2EFFF] dark:bg-[#03132c] py-3 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3B99]/20 ${
          rounded ? "rounded-3xl" : "rounded-none"
        }`}
      />
    </div>
  );
}

export default TextArea;
