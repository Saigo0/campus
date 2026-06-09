import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Grid({ elementsList }) {
  return (
    <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-5">
      {elementsList.map((element, index) => (
        <div
          key={index}
          className={`p-5 flex gap-3 rounded-3xl items-center ${
            element.selected
              ? "bg-[#CCC9FF] dark:bg-[#7273c0]"
              : "bg-[#F2EFFF] dark:bg-[#404178]"
          }`}
          onClick={element.onClick}
        >
          <FontAwesomeIcon icon={element.icon}></FontAwesomeIcon>
          {element.title}
        </div>
      ))}
    </div>
  );
}

export default Grid;
