import React from "react";
import { Code } from "@phosphor-icons/react";
import baseballStats_1 from "../assets/images/baseballStats-1.png";

interface BaseballStatsProps {
  fullScreen: boolean;
}

const BaseballStats: React.FC<BaseballStatsProps> = ({ fullScreen }) => {
  if (fullScreen) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-[#2e5835] from-20% to-[#1b4569] to-100% bg-cover flex flex-col items-center justify-center outline-none">
        <div className="absolute inset-0 pointer-events-none grain-overlay" />
        <div className="flex items-center justify-center h-full">
          <img
            src={baseballStats_1}
            alt="BaseballStats Screenshot"
            className="h-full w-auto rounded-3xl"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-gradient-to-t from-[#354F60] from-0% to-[#FFD3AD] to-200% bg-cover flex flex-col items-center justify-center outline-none">
      <div className="absolute inset-0 pointer-events-none grain-overlay" />
      <div className="relative flex flex-col items-center justify-center h-full w-full z-10 p-4">
        <div className="flex flex-row items-center justify-center h-full w-full">
          <div className="flex flex-col items-center justify-evenly h-5/6 w-4/6">
            <h1 className="text-center text-4xl font-calistoga text-white">
              BaseballStats
            </h1>
            <div className="flex flex-col items-center justify-evenly h-5/6 w-full">
              <h1 className="font-albert text-md text-white text-left">
                I started making this app to track my (men's league) baseball
                stats, but it has ended up being a great way to dive into React
                Native and UI design for the first time. This has been on the
                backburner as it's not the most practical project, but will be
                finished soon!
              </h1>
            </div>
            <div className="flex items-center justify-start h-1/6 space-x-2 w-full">
              <Code weight="bold" size={32} color="#FFCB8AFF" />
              <h1 className="text-lg font-albert font-semibold text-orangeLight text-left text-nowrap">
                React Native | Expo | Firebase
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-center h-full w-full">
            <img
              src={baseballStats_1}
              alt="BaseballStats Screenshot"
              className="h-5/6 w-auto rounded-2xl drop-shadow-screenshot"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-full">
            <h1 className="text-center text-sm font-albert italic text-white opacity-50">
              *in progress
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaseballStats;
