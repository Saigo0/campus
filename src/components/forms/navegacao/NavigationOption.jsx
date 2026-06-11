import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function NavigationOption({
  step,
  stepEqualTo,
  setStep,
  title,
}) {
  return (
    <li
      className={`p-2 ${step == stepEqualTo ? "bg-linear-to-r from-[#1B3B99] to-[#819BFF] dark:from-[#b6c4ff] dark:text-black dark:to-[#819BFF] rounded-3xl text-white" : ""}`}
    >
      <button
        type="button"
        className="flex items-center gap-2"
        onClick={() => setStep(stepEqualTo)}
      >
        <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
        {title}
      </button>
    </li>
  );
}
