import React from "react";
import { TabsDemo } from "./Tabsdemo";
import img1 from "../assets/img/CodeAnt Ai.png";
import ant from "../assets/img/ant.png";
const RightComp = () => {
  return (
    <>
      <div className="flex flex-col items-center  my-3 bg-white rounded-lg shadow-lg flex-1 w-[90vw] md:w-[45vw] p-5 h-[60vh] md:h-[80vh] ">
        <div className="flex mb-4">
          <img
            src={ant}
            alt=""
            className="object-contain"
            style={{ width: "35.62px", height: "40px" }}
          />
          <p className="font-satoshi font-thin text-30px ml-4 mt-2">
            CodeAnt AI
          </p>
        </div>
        <h1 className="md:text-4xl font-medium  leading-12 text-2xl   md:font-medium  md:leading-[48px] font-sans">
          Welcome to CodeAnt AI
        </h1>
        <TabsDemo />
      </div>
      <div className="flex justify-center items-center my-6 px-2 font-sans">
        <span>
          By signing up you agree to <strong>Privacy Policy.</strong>
        </span>
      </div>
    </>
  );
};

export default RightComp;
