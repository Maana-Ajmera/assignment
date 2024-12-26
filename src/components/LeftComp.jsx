import React from "react";
import img1 from "../assets/img/Subtract.png";
import logo from "../assets/img/logo.png";

const LeftComp = () => {
  return (
    <div className="w-full h-full bg-white shadow-sm relative">
      <div className="relative top-[25vh]">
        <StatsWrapper />
      </div>
      <div className="relative top-[22vh] left-[8vw]">
        <IssuesFixedCard />
      </div>

      <img
        src={img1}
        alt=""
        className="object-contain w-[200px] h-[224.65px] absolute left-0 bottom-0"
      />
    </div>
  );
};
const StatsWrapper = () => {
  return (
    <div className="bg-white shadow-new rounded-3xl p-6 max-w-[30rem] mx-auto">
      <div className="flex border-b-2">
        <img src={logo} alt="logo" className="h-8 w-8" />

        <h3 className="text-lg font-bold text-gray-800 mb-4 ml-2">
          AI to Detect & Autofix Bad Code
        </h3>
      </div>
      <div className="grid grid-cols-3 gap-4 text-center pt-8 pb-2">
        <div>
          <p className="text-xl font-bold text-gray-800">30+</p>
          <span className="text-sm text-gray-500">Language Support</span>
        </div>
        <div>
          <p className="text-xl font-bold text-gray-800">10K+</p>
          <span className="text-sm text-gray-500">Developers</span>
        </div>
        <div>
          <p className="text-xl font-bold text-gray-800">100K+</p>
          <span className="text-sm text-gray-500">Hours Saved</span>
        </div>
      </div>
    </div>
  );
};

const IssuesFixedCard = () => {
  return (
    <div className="bg-white shadow-new rounded-3xl p-6 w-[18rem] mx-auto">
      <div className="flex justify-between items-center mb-4">
        <div className="bg-[#e3e3fc] h-[3rem] w-[3rem] rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#9d94fc"
            class="size-7"
          >
            <path
              fill-rule="evenodd"
              d="M2.25 13.5a8.25 8.25 0 0 1 8.25-8.25.75.75 0 0 1 .75.75v6.75H18a.75.75 0 0 1 .75.75 8.25 8.25 0 0 1-16.5 0Z"
              clip-rule="evenodd"
            />
            <path
              fill-rule="evenodd"
              d="M12.75 3a.75.75 0 0 1 .75-.75 8.25 8.25 0 0 1 8.25 8.25.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75V3Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div>
          <p className="text-blue-500 text-sm font-medium">↑ 14%</p>
          <p className="text-gray-500 text-xs">This week</p>
        </div>
      </div>
      <div>
        <p className="text-gray-600 text-sm font-medium">Issues Fixed</p>
        <h2 className="text-3xl font-bold text-gray-900">500K+</h2>
      </div>
    </div>
  );
};
export default LeftComp;
