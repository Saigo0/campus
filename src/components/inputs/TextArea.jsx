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
    <div className="flex flex-col w-full">
      <div className="flex justify-between text-sm">
        <label htmlFor={id}>
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
        className={`bg-[#F2EFFF] py-2 px-3 text-sm ${
          rounded ? "rounded-3xl" : "rounded-none"
        }`}
      />
    </div>
  );
}

export default TextArea;
