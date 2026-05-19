import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BoxInfo({ children, title, icon, addImage = false, onChange = () => {}}) {
  return (
    <div className="bg-white p-7 w-full rounded-3xl">
      <div className="flex justify-between mb-5">
        <div className="flex flex-row gap-2 items-center">
          <FontAwesomeIcon
            icon={icon}
            className="text-[#1B3B99]"
          ></FontAwesomeIcon>
          <h3 className="font-bold">{title}</h3>
        </div>
        {addImage && (
          <button className="w-10 bg-linear-to-r from-[#1B3B99] to-[#819BFF] rounded-xl">
            <label htmlFor="image">
              <FontAwesomeIcon
                icon={faPlus}
                className="text-white"
              ></FontAwesomeIcon>
            </label>
            <input
              type="file"
              accept="image/*"
              id="image"
              className="hidden w-full"
              onChange={onChange}
            />
          </button>
        )}
      </div>
      {children}
    </div>
  );
}

export default BoxInfo;
