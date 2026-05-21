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
        className="mb-3"
        classNamePrefix="select"
        >

        </ReactSelect>
    )
}

export default Select;