import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { TabsDemo } from "./Tabsdemo";
import RightComp from "./RightComp";
import LeftComp from "./LeftComp";

const SignIn = () => {
  return (
    <div>
      <div className="h-screen flex">
        {/* Left Column (Image) */}
        <div className="md:block md:flex-1 md:bg-white hidden">
          <LeftComp />
        </div>

        {/* Right Column (Sign-In Form) */}
        <div className="flex-1 flex items-center justify-center bg-[#FAFAFA] overflow-x-hidden">
          <div className="overflow-x-hidden">
            <RightComp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
