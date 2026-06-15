import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

export default function ProfilePicture({ image, setImage }) {
  return (
    <div className="w-full flex justify-center">
      <div className="relative w-50 h-50 bg-[#DBDBDB] rounded-2xl flex items-center justify-center">
        {image ? (
          <img
            src={URL.createObjectURL(image)}
            alt="Preview"
            className="w-full h-full object-cover rounded-2xl"
          />
        ) : (
          <FontAwesomeIcon
            icon={faFile}
            className="text-[80px] text-gray-500"
          />
        )}
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="w-full h-full absolute inset-0 opacity-0 cursor-pointer"
        />
      </div>
    </div>
  );
}
