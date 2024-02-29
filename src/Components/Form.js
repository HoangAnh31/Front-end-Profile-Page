import React from "react";
import Heading from "../UI/Heading";
import Button from "../UI/Button";
import Input from "../UI/Input";
import { useData } from "../Hooks/DataContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import avatarDefault from "../imgs/avatar.png";

const Form = () => {
  const { objFile, image } = useData();

  const notifySuccess = (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 3000, // Auto-close the notification after 3000 milliseconds (3 seconds)
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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

  const handleUploadImage = async () => {
    if (image === avatarDefault) {
      notifyError("Please don't use the default avatar, choose another one!!!");
      return;
    } else {
      const fromData = new FormData();
      fromData.append("image", objFile);

      try {
        const response = await fetch("http://localhost:8000/upload", {
          method: "POST",
          body: fromData,
        });
        const data = await response.json();
        notifySuccess(data.message);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };
  return (
    <>
      <div className="relative">
        <Heading title="Basic info"></Heading>
        <div className="absolute bottom-3 right-0">
          <Button
            name="cancel"
            className="uppercase text-sm rounded-[7px] mr-3 min-w-[95px] px-3 bg-white border-2 border-[#A5A58D] text-[#6B705C]"
          ></Button>
          <Button
            name="save"
            className="uppercase text-sm rounded-[7px] min-w-[95px] px-3 text-white "
            handleSave={handleUploadImage}
          ></Button>
        </div>
      </div>
      <div>
        <div className="md:flex md:justify-between">
          <Input
            className="md:flex-auto md:mr-4"
            type="text"
            title="Firstname"
            idInput="firstname"
          ></Input>
          <Input type="text" title="Lastname" idInput="lastname"></Input>
        </div>
        <Input type="text" title="Title" idInput="title"></Input>
        <Input type="text" title="Email" idInput="email"></Input>
      </div>

      <Heading title="About me" className="mt-10"></Heading>
      <textarea
        className="border-2 rounded-[7px] border-[#E5E5E5] p-1 min-h-9 w-full mt-4 placeholder:text-sm placeholder:font-light placeholder:text-[#6C6C6C]"
        id="about_me"
        name="aboutMe"
        placeholder="I’m web designer, I work in programs like figma, adobe photoshop, adobe illustrator"
        rows="5"
      ></textarea>
    </>
  );
};

export default Form;
