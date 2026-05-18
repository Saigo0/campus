import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Utility({ icon, title }) {
  return (
    <div className="p-5 bg-[#F2EFFF] rounded-3xl flex justify-between items-center">
      <div className="flex gap-3 items-center">
        <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
        {title}
      </div>
      <input type="checkbox" className="appearance-none w-5 h-5 bg-white rounded-xl"/>
    </div>
  );
}

export default Utility;
