import React, { useEffect, useState } from "react";
import { Code } from "@phosphor-icons/react";
import { isMobile } from "react-device-detect";
import baseballStats_1 from "../assets/images/baseballStats-1.png";
import baseballStats_2 from "../assets/images/baseballStats-2.png";
import baseballStats_3 from "../assets/images/baseballStats-3.png";
import baseballStats_4 from "../assets/images/baseballStats-4.png";
import baseballStats_5 from "../assets/images/baseballStats-5.png";

interface BaseballStatsProps {
  fullScreen: boolean;
}

const images: string[] = [
  baseballStats_1,
  baseballStats_2,
  baseballStats_3,
  baseballStats_4,
  baseballStats_5,
];

const BaseballStats: React.FC<BaseballStatsProps> = ({ fullScreen }) => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearTimeout(timer);
  }, [index]);

  if (isMobile && !fullScreen) {
    return (
      <div className="w-full h-full bg-gradient-to-tr from-[#354F60] from-40% to-[#FFD3AD] to-100% bg-cover flex flex-col items-center justify-center outline-none">
        <div className="absolute inset-0 pointer-events-none grain-overlay z-10" />
        <div className="relative flex flex-col items-center justify-center h-full w-full z-0 p-4">
          <div className="flex flex-row items-center justify-center h-full w-full">
            <div className="flex flex-col items-center justify-evenly h-full w-4/6">
              <h1 className="text-center text-sm font-calistoga text-white">
                Baseball Stats
              </h1>
              <div className="flex flex-col items-center justify-evenly h-5/6 w-full">
                <h1 className="font-albert text-xs text-white text-left">
                  I started making this app to track my (men's league) baseball
                  stats, but it has ended up being a great way to dive into
                  React Native and UI design for the first time. This has been
                  on the backburner as it's not the most practical project, but
                  will be finished soon!
                </h1>
              </div>
              <div className="flex items-center justify-start h-1/6 space-x-2 w-full">
                <Code weight="bold" size={16} color="#FFCB8AFF" />
                <h1 className="text-xs font-albert font-semibold text-orangeLight text-left text-nowrap">
                  React Native | Expo | Firebase
                </h1>
              </div>
            </div>
            <div className="flex items-center justify-center h-full w-full">
              <img
                src={images[index]}
                alt="Baseball Screenshot"
                className="h-5/6 w-auto rounded-xl drop-shadow-screenshot"
              />
            </div>
            <div className="absolute bottom-1 left-0 w-full">
              <h1 className="text-center text-xs font-albert italic text-white opacity-50">
                *in progress
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (fullScreen) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-[#354F60] from-20% to-[#FFD3AD] to-100% bg-cover flex flex-col items-center justify-center outline-none">
        <div className="absolute inset-0 pointer-events-none grain-overlay" />
        <div className="flex items-center justify-center h-full z-20">
          <img
            src={images[index]}
            alt="BaseballStats Screenshot"
            className="h-full w-auto"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-gradient-to-t from-[#354F60] from-0% to-[#FFD3AD] to-200% bg-cover flex flex-col items-center justify-center outline-none">
      <div className="absolute inset-0 pointer-events-none grain-overlay z-10" />
      <div className="relative flex flex-col items-center justify-center h-full w-full z-0 p-4">
        <div className="flex flex-row items-center justify-center h-full w-full">
          <div className="flex flex-col items-center justify-evenly h-5/6 w-4/6">
            <h1 className="text-center text-4xl font-calistoga text-white">
              Baseball Stats
            </h1>
            <div className="flex flex-col items-center justify-evenly h-5/6 w-full">
              <ul className="list-disc list-outside pl-2 font-albert text-md text-white text-left">
                I started making this app to track my (men's league) baseball
                stats, but it has ended up being a great way to dive into React
                Native and UI design for the first time. This has been on the
                backburner as it's not the most practical project, but will be
                finished soon!
              </ul>
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
              src={images[index]}
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
