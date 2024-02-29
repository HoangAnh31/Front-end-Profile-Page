import React, { createContext, useContext, useState } from "react";
import avatarDefault from "../imgs/avatar.png";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [image, setImage] = useState(avatarDefault);
  const [objFile, setObjFile] = useState(null);

  const setImageData = (newImage) => {
    setImage(newImage);
  };

  const setObjFileImage = (newObj) => {
    setObjFile(newObj);
  };
  return (
    <DataContext.Provider
      value={{ image, setImageData, setObjFileImage, objFile }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
