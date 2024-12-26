import React, { useState, useEffect } from "react";
import { clsx } from "clsx";

import { SidebarProvider } from "./ui/sidebar";

import { Button } from "./ui/button";

import SideBarDemo from "./SideBarDemo";
import Repo from "./Repo";
import MobileSidebar from "./MobileSidebar";
import RepositoryList from "./RepositoryList";
import repositories from "../assets/data/repositories.json";

// img ----

import ant from "../assets/img/ant.png";

// icons
import { Menu } from "lucide-react";

const MainDash = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const MobileLayout = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="flex items-center justify-between pt-4 px-2 bg-white border-b h-[8vh]">
        <div className="flex mb-4">
          <img
            src={ant}
            alt=""
            className="object-contain ml-2"
            style={{ width: "35.62px", height: "40px" }}
          />
          <p className="font-satoshi font-thin text-30px ml-4 mt-2">
            CodeAnt AI
          </p>
        </div>
        <Button className="shadow-none" onClick={() => setIsSidebarOpen(true)}>
          <Menu className="h-14 w-14" />
        </Button>
      </div>
      <div>
        <RepositoryList repositories={repositories} />
      </div>
      <MobileSidebar
        className="bg-white"
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </div>
  );

  const DesktopLayout = () => (
    <div className="flex h-screen bg-[#FAFAFA]">
      {/* side bar */}
      <div className=" bg-white text-black w-1/6 h-full shadow-lg">
        <SidebarProvider className="w-full h-full">
          {/* main side bar */}
          <SideBarDemo className="w-full h-full" />
        </SidebarProvider>
      </div>

      {/* main content */}
      <div className="h-screen w-5/6 mx-auto px-4 py-4">
        {/* content */}
        <Repo />
      </div>
    </div>
  );

  return isMobile ? <MobileLayout /> : <DesktopLayout />;
};

export default MainDash;
