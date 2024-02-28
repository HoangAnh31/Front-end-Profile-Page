import React from "react";

const Input = (props) => {
  return (
    <div className={`mt-1 mb-5 ${props.className ? props.className : ""}`}>
      {props.title && (
        <label
          className="inline-block w-full uppercase text-sm text-black font-normal mb-2  "
          htmlFor={props.idInput}
        >
          {props.title}
        </label>
      )}
      <input
        className="border-2 rounded-[7px] border-[#E5E5E5] p-1 min-h-9 w-full"
        type={props.type}
        id={props.idInput}
      ></input>
    </div>
  );
};

export default Input;
