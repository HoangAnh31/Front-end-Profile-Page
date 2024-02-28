import React from "react";
import { useData } from "../Hooks/DataContext";
const Avatar = () => {
  const { image } = useData();
  return (
    <div className="text-center">
      <div className="">
        <img
          className="rounded-full border-[5px] border-[#A5A58D] w-[150px] h-[150px] object-cover my-8 mx-auto"
          src={image}
        ></img>
      </div>
      <h2 className="font-bold text-[28px] text-black">Khusan Akhmedov</h2>
      <p className="text-[#6C6C6C] font-light text-2xl">Web-designer</p>
    </div>
  );
};

export default Avatar;
