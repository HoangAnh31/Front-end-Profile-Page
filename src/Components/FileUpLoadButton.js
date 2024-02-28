import React, { useRef } from "react";
import { useData } from "../Hooks/DataContext";

const FileUpLoadButton = () => {
  const fileInputRef = useRef(null);
  const { setImageData } = useData();

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const fileObj = event.target.files && event.target.files[0];

    if (!fileObj) return;

    const reader = new FileReader();

    reader.readAsDataURL(fileObj);
    reader.onloadend = () => {
      setImageData(reader.result);
    };
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
