import React from "react";

const IndexItem = (props) => {
  return (
    <div className="text-center px-8 box-border border-r last:border-r-0 border-[#6C6C6C]">
      <p className="text-3xl font-normal text-black mb-2">{props.number}</p>
      <p className="text-base font-light text-[#6C6C6C]">{props.text}</p>
    </div>
  );
};

export default IndexItem;
