import React, { useEffect, useState } from "react";
import { Code } from "@phosphor-icons/react";
import { isMobileOnly } from "react-device-detect";
import uhub_1 from "../assets/images/uhub-1.png";
import uhub_2 from "../assets/images/uhub-2.png";
import uhub_3 from "../assets/images/uhub-3.png";
import uhub_4 from "../assets/images/uhub-4.png";
import uhub_5 from "../assets/images/uhub-5.png";

interface UHubProps {
  fullScreen: boolean;
}

const images: string[] = [uhub_1, uhub_2, uhub_3, uhub_4, uhub_5];

const UHub: React.FC<UHubProps> = ({ fullScreen }) => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearTimeout(timer);
  }, [index]);

  if (isMobileOnly && !fullScreen) {
    return (
      <div className="w-full h-full bg-gradient-to-tr from-[#154058] from-40% to-[#bc5e36] to-100% bg-cover flex flex-col items-center justify-center outline-none">
        <div className="absolute inset-0 pointer-events-none grain-overlay z-10" />
        <div className="relative flex flex-col items-center justify-center h-full w-full z-0 p-4">
          <div className="flex flex-row items-center justify-center h-full w-full">
            <div className="flex flex-col items-center justify-evenly h-full w-4/6">
              <h1 className="text-center text-2xl font-calistoga text-white">
                UHub
              </h1>
              <div className="flex flex-col items-center justify-evenly h-5/6 w-full">
                <h1 className="font-albert text-sm text-white text-left">
                  A centralized platform to discover and explore resources on
                  UVic campus.
                </h1>
                <div className="flex w-full justify-start items-start">
                  <ul className="list-disc list-outside pl-3 font-albert text-xs text-white text-left">
                    <li>Explore vendors via interactive campus map</li>
                    <li>Instant menu keyword search (vegan? coffee?)</li>
                    <li>Real-time hours &amp; daily menu updates</li>
                  </ul>
                </div>
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
                alt="UHub Screenshot"
                className="h-5/6 w-auto rounded-xl drop-shadow-screenshot"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (fullScreen) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-[#154058] from-20% to-[#bc5e36] to-100% bg-cover flex flex-col items-center justify-center outline-none">
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
    <div className="w-full h-full bg-gradient-to-tr from-[#154058] from-40% to-[#bc5e36] to-100% bg-cover flex flex-col items-center justify-center outline-none">
      <div className="absolute inset-0 pointer-events-none grain-overlay z-10" />
      <div className="relative flex flex-col items-center justify-center h-full w-full z-0 p-4">
        <div className="flex flex-row items-center justify-center h-full w-full">
          <div className="flex flex-col items-center justify-evenly h-5/6 w-4/6">
            <h1 className="text-center text-3xl font-calistoga text-white">
              UHub
            </h1>

            <div className="flex flex-col items-center justify-evenly h-5/6 w-full">
              <h1 className="font-albert text-md text-white text-left">
                A centralized platform to discover and explore resources on UVic
                campus.
              </h1>
              <div className="flex w-full justify-start items-start">
                <ul className="list-disc list-outside pl-2 font-albert text-md text-white text-left">
                  <li>Explore vendors via interactive campus map</li>
                  <li>Instant menu keyword search (vegan? coffee?)</li>
                  <li>Real-time hours &amp; daily menu updates</li>
                </ul>
              </div>
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
              alt="UHub Screenshot"
              className="h-5/6 w-auto rounded-xl drop-shadow-screenshot"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UHub;
