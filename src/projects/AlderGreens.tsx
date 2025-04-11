import React from "react";
import { Code } from "@phosphor-icons/react";
import aldergreens_1 from "../assets/images/aldergreens-1.png";
import { isMobile } from "react-device-detect";

const AlderGreens: React.FC = () => {
  if (isMobile) {
    return (
      <div className="w-full h-full bg-gradient-to-tr from-[#3d523f] from-40% to-[#80a082] to-100% bg-cover flex flex-col items-center justify-center outline-none">
        <div className="absolute inset-0 pointer-events-none grain-overlay z-10" />
        <div className="relative flex flex-col items-center justify-center h-full w-full z-0 p-4">
          <div className="flex flex-row items-center justify-center h-full w-full">
            <div className="flex flex-col items-center justify-evenly h-full w-4/6">
              <h1 className="text-center text-2xl font-calistoga text-white">
                AlderGreens
              </h1>
              <div className="flex flex-col items-center justify-evenly h-5/6 w-full">
                <h1 className="font-albert text-xs text-white text-left">
                  A mobile web app designed to track scores for bragging rights
                  with my roommates.
                </h1>
                <div className="flex w-full justify-start items-start">
                  <ul className="list-disc list-outside pl-3 font-albert text-xs text-white text-left">
                    <li>Game tracking and scores persist</li>
                    <li>Log every shot location with GPS pin</li>
                    <li>Course-specific hole layouts</li>
                    <li>Persistent stats &amp; personal-best analytics</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center justify-start h-1/6 space-x-2 w-full">
                <Code weight="bold" size={16} color="#FFCB8AFF" />
                <h1 className="text-xs font-albert font-semibold text-orangeLight text-left text-nowrap">
                  React | Vite | Firebase
                </h1>
              </div>
            </div>
            <div className="flex items-center justify-center h-full w-1/2">
              <img
                src={aldergreens_1}
                alt="AlderGreens Screenshot"
                className="h-5/6 w-auto rounded-xl drop-shadow-screenshot"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-gradient-to-br from-[#3d523f] from-20% to-[#80a082] to-100% bg-cover flex flex-col items-center justify-center outline-none">
      <div className="absolute inset-0 pointer-events-none grain-overlay z-10" />
      <div className="relative flex flex-col items-center justify-center h-full w-full z-0 px-4 p-4">
        <div className="flex flex-row items-center justify-evenly h-full w-full">
          <div className="flex flex-col items-center justify-evenly h-5/6 w-full">
            <h1 className="text-center text-4xl font-calistoga text-white">
              AlderGreens
            </h1>
            <div className="flex flex-col items-center justify-evenly h-5/6 w-full">
              <h1 className="font-albert text-md text-white text-left">
                A mobile web app designed to track scores for bragging rights
                with my roommates.
              </h1>
              <div className="flex w-full justify-start items-start">
                <ul className="list-disc list-outside pl-2 font-albert text-md text-white text-left">
                  <li>Game tracking and scores persist</li>
                  <li>Log every shot location with GPS pin</li>
                  <li>Course-specific hole layouts</li>
                  <li>Persistent stats &amp; personal-best analytics</li>
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-start h-1/6 space-x-2 w-full">
              <Code weight="bold" size={32} color="#FFCB8AFF" />
              <h1 className="text-lg font-albert font-semibold text-orangeLight text-left">
                React | Vite | Firebase
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-center h-full w-4/5">
            <img
              src={aldergreens_1}
              alt="AlderGreens Screenshot"
              className="h-5/6 w-auto rounded-xl drop-shadow-screenshot"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlderGreens;
