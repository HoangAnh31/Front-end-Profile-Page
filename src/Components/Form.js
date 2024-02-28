import React from "react";
import Heading from "../UI/Heading";
import Button from "../UI/Button";
import Input from "../UI/Input";

const Form = () => {
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
