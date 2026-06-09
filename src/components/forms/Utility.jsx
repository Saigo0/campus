import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Utility({ icon, title, checked, onChange }) {
  return (
    <div className={`p-5 rounded-3xl flex justify-between items-center ${checked ? "bg-[#CCC9FF] dark:bg-[#7273c0]" : "bg-[#F2EFFF] dark:bg-[#404178]"}`}>
      <div className="flex gap-3 items-center">
        <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
        {title}
      </div>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={`appearance-none w-5 h-5 rounded-xl ${checked ? "bg-[#1B3B99] dark:bg-[#404178]" : "bg-white"}`}
      />
    </div>
  );
}

export default Utility;
