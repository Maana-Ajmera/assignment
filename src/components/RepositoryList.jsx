import React from "react";
import { Button } from "./ui/button";
import { Input } from ".//ui/input";

// icons
import { RefreshCcw, Plus, Search, Database } from "lucide-react";

const languageColors = {
  React: "bg-blue-500",
  Javascript: "bg-yellow-500",
  Python: "bg-green-500",
  Swift: "bg-orange-500",
  Java: "bg-red-500",
  "HTML/CSS": "bg-purple-500",
  PHP: "bg-indigo-500",
};

const RepositoryList = ({ repositories }) => {
  return (
    <div className="bg-white h-full rounded-lg shadow-sm text-2xl ">
      <div className="p-4 border-b">
        <div className="my-1">
          <div>
            <h1 className="font-medium text-2xl">Repositories</h1>
            <h5 className="text-gray-400 text-sm">33 Total Repositories</h5>
          </div>
          <div className="flex space-x-4 my-3">
            <Button className="text-gray-500 border border-gray-300 rounded-[0.375rem] shadow-sm">
              <RefreshCcw />
              Refresh All
            </Button>
            <Button className="text-white bg-[#1570EF] rounded-[0.375rem] shadow-md hover:bg-blue-500 hover:text-white font-thin">
              <Plus />
              Add Repository
            </Button>
          </div>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4 " />
          <Input
            className="pl-10 w-full border-gray-300 rounded-[0.375rem]  text-gray-600 py-5 "
            placeholder="Search repositories..."
          />
        </div>
      </div>
      <div className="divide-y">
        {repositories.map((repo) => (
          <div key={repo.name} className="p-4 hover:bg-gray-50">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-xl">{repo.name}</span>
                  <span
                    className={`rounded-full text-sm px-2 border-[#c4e5fc] border-2 w-[4rem] text-center ${
                      repo.visibility === "Public"
                        ? "bg-[#eef9fe] text-[#3c78db]"
                        : "bg-[#eef9fe] text-[#3c78db]"
                    }`}
                  >
                    {repo.visibility}
                  </span>
                </div>
                <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <span>{repo.language}</span>
                    <div className="bg-[#1470ee] rounded-full w-2 h-2"></div>
                  </span>
                  <span className="flex items-center gap-1">
                    <Database className="text-black h-4 w-4" />
                    {repo.size} KB
                  </span>
                  <span>Updated {repo.updatedAt}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RepositoryList;
