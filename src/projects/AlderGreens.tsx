import React from "react";
import { Code, GithubLogo } from "@phosphor-icons/react";

const AlderGreens: React.FC = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-startGreenGrad from-20% to-endGreenGrad to-100% bg-cover flex flex-col items-center justify-center outline-none">
      <div className="absolute inset-0 pointer-events-none grain-overlay" />
      <div className="relative flex flex-col items-center justify-center h-full w-full z-10 px-4 p-4">
        <div className="flex flex-col items-center justify-center h-1/6">
          <h1 className="text-center text-4xl font-calistoga text-white">
            AlderGreens
          </h1>
        </div>
        <div className="flex flex-row items-center justify-center h-5/6 w-full">
          <div className="flex flex-col items-center justify-evenly h-full w-full">
            <div className="flex flex-col items-center justify-evenly h-5/6 w-full">
              <h1 className="font-albert text-white text-left">
                A mobile web app designed to track scores for bragging rights
                with my roommates. <br />
              </h1>
              <div className="flex w-full justify-start items-start">
                <text className="font-albert text-sm text-white text-left">
                  <li>Track each shot location</li>
                  <li>Unique hole layouts for course</li>
                  <li>Game tracking and scores persist</li>
                </text>
              </div>
            </div>
            <div className="flex items-center justify-start h-1/6 space-x-2 w-full">
              <Code weight="bold" size={32} color="#FFCB8AFF" />
              <h1 className="text-lg font-albert font-semibold text-orangeLight text-left">
                React | Vite | Firebase
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-center h-11/12 w-4/5">
            <img
              src="/src/assets/aldergreens-1.png"
              alt="AlderGreens Screenshot"
              className="h-full w-auto rounded-3xl drop-shadow-screenshot border-4 border-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlderGreens;
