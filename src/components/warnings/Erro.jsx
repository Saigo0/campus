import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

function Erro({ erro, conteudo }) {
  return (
    <div
      className={`${!erro && "hidden"} flex gap-2 text-sm items-center w-fit bg-red-200 rounded-md p-2 mb-3`}
    >
      <FontAwesomeIcon icon={faExclamationCircle} className="text-[#95191E]" />
      <p>{conteudo}</p>
    </div>
  );
}

export default Erro;
