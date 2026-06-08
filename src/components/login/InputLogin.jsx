function InputLogin({
  label,
  id,
  value,
  type = "text",
  placeholder = "",
  onChange,
  required = false,
  forgot = false
}) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between text-sm">
        <label htmlFor={id}>{label}</label>
        {forgot && (
            <span className="text-[#1B3B99] dark:text-[#819BFF]">Esqueceu a senha?</span>
        )}
      </div>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-[#F2EFFF] p-2 dark:bg-[#0B1120]"
      />
    </div>
  );
}

export default InputLogin;
