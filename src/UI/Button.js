import React from "react";

const Button = (props) => {
  return (
    <button
      type="button"
      className={`bg-[#6B705C] rounded-[10px] text-2xl font-light px-5 py-2 cursor-pointer ${
        props.className ? props.className : ""
      }`}
    >
      {props.name}
    </button>
  );
};

export default Button;
