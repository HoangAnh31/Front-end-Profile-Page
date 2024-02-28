import React, { createContext, useContext, useState } from "react";
import avatarDefault from "../imgs/avatar.png";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [image, setImage] = useState(avatarDefault);

  const setImageData = (newImage) => {
    setImage(newImage);
  };
  return (
    <DataContext.Provider value={{ image, setImageData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
