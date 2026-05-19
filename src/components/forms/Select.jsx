import ReactSelect from "react-select";

function Select({options, value, onChange}){
    return(
        <ReactSelect
        options={options}
        value={value}
        onChange={onChange}
        className="mb-3"
        >

        </ReactSelect>
    )
}

export default Select;