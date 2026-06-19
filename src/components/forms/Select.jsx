import ReactSelect from "react-select";
import { useTheme } from "next-themes";

function Select({ options, value, onChange, instanceId, inputId }) {
  const { resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  return (
    <ReactSelect
      instanceId={instanceId}
      inputId={inputId}
      options={options}
      value={value}
      onChange={onChange}
      placeholder={"Selecione..."}
      styles={{
        control: (base) => ({
          ...base,
          backgroundColor: isDark ? "#131318" : "#F2EFFF",
          border: "none",
          borderRadius: "1.5rem",
          minHeight: "48px",
          boxShadow: "none",
          paddingLeft: "4px",
          fontSize: "0.875rem",
        }),

        singleValue: (base) => ({
          ...base,
          color: isDark ? "#FFF" : "#000",
        }),

        input: (base) => ({
          ...base,
          color: isDark ? "#FFF" : "#000",
        }),

        placeholder: (base) => ({
          ...base,
          color: "#6B7280",
        }),

        menu: (base) => ({
          ...base,
          backgroundColor: isDark ? "#131318" : "#F2EFFF",
          borderRadius: "1rem",
          overflow: "hidden",
        }),

        option: (base, state) => ({
          ...base,
          backgroundColor: state.isSelected
            ? "#1B3B99"
            : state.isFocused
              ? isDark
                ? "#1F2937"
                : "#E4DDFD"
              : isDark
                ? "#131318"
                : "#F2EFFF",
          color: state.isSelected ? "#FFF" : isDark ? "#FFF" : "#000",
          fontSize: "0.875rem",
        }),
      }}
    ></ReactSelect>
  );
}

export default Select;
