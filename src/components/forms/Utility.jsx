import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Utility({ icon, title, checked, onClick }) {
  return (
    <div className={`p-5 rounded-3xl flex justify-between items-center ${checked ? "bg-[#CCC9FF]" : "bg-[#F2EFFF]"}`} onClick={onClick}>
      <div className="flex gap-3 items-center">
        <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
        {title}
      </div>
      <input
        type="checkbox"
        checked={checked}
        className={`appearance-none w-5 h-5 rounded-xl ${checked ? "bg-[#1B3B99]" : "bg-white"}`}
      />
    </div>
  );
}

export default Utility;
