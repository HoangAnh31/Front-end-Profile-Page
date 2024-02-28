import React from "react";

const Heading = (props) => {
  return (
    <div
      className={`border-b-2 border-[#E5E5E5] mt-5 mb-3 ${
        props.className ? props.className : ""
      }`}
    >
      <h2 className="font-bold text-lg text-black uppercase mb-8">
        {props.title}
      </h2>
    </div>
  );
};

export default Heading;
