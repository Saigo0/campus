import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DeleteModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-black rounded-lg p-6 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col items-center gap-3">
          <FontAwesomeIcon
            icon={faCircleExclamation}
            className="text-[#95191E] text-4xl"
          />
          <h2 className="text-lg font-bold">Cuidado!</h2>
          <p className="mb-6">Deseja confirmar a exclusão?</p>
        </div>

        <div className="flex flex-col w-full gap-3">
          <button className="bg-[#3A6040] p-2 text-white rounded-md" onClick={onConfirm}>
            Confirmar
          </button>
          <button className="bg-[#95191E] p-2 text-white rounded-md" onClick={onClose}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
