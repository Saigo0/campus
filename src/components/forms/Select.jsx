import ReactSelect from "react-select";

function Select({options, value, onChange, instanceId, inputId}){
    return(
        <ReactSelect
        instanceId={instanceId}
        inputId={inputId}
        options={options}
        value={value}
        onChange={onChange}
        placeholder={"Selecione..."}
        className="mb-3 bg-[#F2EFFF] dark:bg-[#03132c] text-black dark:text-white"
        classNamePrefix="select"
        >

        </ReactSelect>
    )
}

export default Select;