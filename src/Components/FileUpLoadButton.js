import React, { useRef } from "react";
import { useData } from "../Hooks/DataContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FileUpLoadButton = () => {
  const fileInputRef = useRef(null);
  const { setImageData, setObjFileImage } = useData();

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const notifyError = (message) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 3000, // Auto-close the notification after 3000 milliseconds (3 seconds)
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleFileChange = (event) => {
    const fileObj = event.target.files && event.target.files[0];

    if (!fileObj) return;

    if (fileObj.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.readAsDataURL(fileObj);
      reader.onloadend = () => {
        setImageData(reader.result);
      };
      setObjFileImage(fileObj);
    } else {
      notifyError("This file is not image file. Please choose again!!!");
    }
  };

  return (
    <div>
      <input
        type="file"
        id="uploadAvatar"
        style={{ display: "none" }}
        ref={fileInputRef}
        onChange={handleFileChange}
      ></input>
      <button
        className="min-w-64 bg-[#6B705C] rounded-[10px] text-2xl text-white font-light px-5 py-2 cursor-pointer"
        onClick={handleClick}
      >
        Upload new avatar
      </button>
    </div>
  );
};

export default FileUpLoadButton;
