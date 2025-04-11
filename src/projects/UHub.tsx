import React from "react";
import { Code } from "@phosphor-icons/react";
import uhub_1 from "../assets/images/uhub-1.png";

const UHub: React.FC = () => {
  return (
    <div className="w-full h-full bg-gradient-to-tr from-[#154058] from-40% to-[#bc5e36] to-100% bg-cover flex flex-col items-center justify-center outline-none">
      <div className="absolute inset-0 pointer-events-none grain-overlay z-10" />
      <div className="relative flex flex-col items-center justify-center h-full w-full z-0 p-4">
        <div className="flex flex-row items-center justify-center h-full w-full">
          <div className="flex flex-col items-center justify-evenly h-5/6 w-4/6">
            <h1 className="text-center text-4xl font-calistoga text-white">
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
              src={uhub_1}
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
