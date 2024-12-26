import React from "react";
import repositories from "../assets/data/repositories.json";

// icon
import { Database } from "lucide-react";

const languageColors = {
  React: "text-blue-500",
  Javascript: "text-yellow-500",
  Python: "text-green-500",
  Swift: "text-orange-500",
  Java: "text-red-500",
  "HTML/CSS": "text-purple-500",
  PHP: "text-indigo-500",
};

const DataRepo = () => {
  return (
    <div>
      {repositories.map((repo, index) => (
        <div
          key={repo.name}
          className="hover:bg-gray-100 hover:cursor-pointer text-xl"
        >
          <div className="flex justify-between items-center px-4 transition-colors">
            {/* Left content */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="font-medium">{repo.name}</span>
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
              <div className="flex items-center gap-8 text-sm text-gray-500">
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
          {/* Add line after each item except the last one */}
          {index !== repositories.length - 1 && (
            <hr className="border-t-2 border-gray-200 my-4" />
          )}
        </div>
      ))}
    </div>
  );
};

export default DataRepo;