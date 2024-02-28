import React from "react";
import Avatar from "./Avatar";
import IndexItem from "../UI/IndexItem";
import FileUpLoadButton from "./FileUpLoadButton";

const InfoProfile = () => {
  return (
    <>
      <p className="text-center text-3xl font-normal leading-10 text-[#6C6C6C] mt-8">
        Profile
      </p>
      <div className="lg:px-12 lg:box-border lg:border-r-2 lgborder-r-[#E6E6E6] lg:pb-12">
        <Avatar></Avatar>
        <div className="flex justify-center mt-7 mb-4">
          <IndexItem number="21" text="Shots"></IndexItem>
          <IndexItem number="238" text="Followers"></IndexItem>
          <IndexItem number="101" text="Following"></IndexItem>
        </div>
        <div className="mt-9 mb-7 text-center">
          <FileUpLoadButton></FileUpLoadButton>
        </div>
        <p className="mb-3 font-light text-2xl text-[#6C6C6C] text-center">
          Uzbekistan, Tashkent
        </p>
        <p className="font-light text-lg text-[#6C6C6C] text-center">
          I’m web designer, I work in programs like figma, adobe photoshop,
          adobe illustrator
        </p>
      </div>
    </>
  );
};

export default InfoProfile;
