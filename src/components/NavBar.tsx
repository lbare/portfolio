import React from "react";
import {
  Golf,
  MapPin,
  Baseball,
  Key,
  Camera,
  CloudSun,
} from "@phosphor-icons/react";

interface NavBarProps {
  currentProject: string;
  setCurrentProject: (project: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({
  currentProject,
  setCurrentProject,
}) => {
  return (
    <div className="absolute h-1/6 bottom-0 left-0 w-full px-4 mt-4 sm:mt-8 z-40">
      <div
        className="w-full border-3 border-gray-300 h-2/3 rounded-lg flex items-center justify-between 
                      overflow-hidden shdow-[10px_10px_0px_0_rgba(255,255,255,1)]"
      >
        <div className="flex h-full bg-neutral-800 py-3 w-full justify-between items-center px-4 space-x-4">
          <button
            onClick={() => setCurrentProject("about")}
            className="flex h-full w-full rounded-l-lg px-6 space-x-4 bg-neutral-900 border-gray-300 border-2 
                        rounded-xl justify-center items-center flex-row"
          >
            {currentProject === "about" ? (
              <div className="w-2 h-2 bg-green-100 rounded-full shadow-[0px_0px_10px_3.5px_rgba(56,255,156,1)]" />
            ) : (
              <div className="w-2 h-2 bg-neutral-400 rounded-full" />
            )}
            <h1 className="text-lg font-mono text-white whitespace-nowrap">
              About Me
            </h1>
          </button>
          <button
            onClick={() => setCurrentProject("alderGreens")}
            className="flex h-full w-full px-4 space-x-4 flex-row bg-neutral-900 border-gray-300 border-2 
                        rounded-xl justify-center items-center hover:bg-neutral-700 transition ease-in-out duration-150"
          >
            {currentProject === "alderGreens" ? (
              <div className="w-2 h-2 bg-green-100 rounded-full shadow-[0px_0px_10px_3.5px_rgba(56,255,156,1)]" />
            ) : (
              <div className="w-2 h-2 bg-neutral-400 rounded-full" />
            )}
            <Golf size={30} color="#fff" weight="fill" />
          </button>
          <button
            onClick={() => setCurrentProject("uhub")}
            className="flex h-full w-full px-4 space-x-4 flex-row bg-neutral-900 border-gray-300 border-2 rounded-xl 
                        justify-center items-center hover:bg-neutral-700 transition ease-in-out duration-150"
          >
            {currentProject === "uhub" ? (
              <div className="w-2 h-2 bg-green-100 rounded-full shadow-[0px_0px_10px_3.5px_rgba(56,255,156,1)]" />
            ) : (
              <div className="w-2 h-2 bg-neutral-400 rounded-full" />
            )}
            <MapPin size={30} color="#fff" weight="fill" />
          </button>
          <button
            onClick={() => setCurrentProject("baseballStats")}
            className="flex h-full w-full px-4 space-x-4 flex-row bg-neutral-900 border-gray-300 border-2 rounded-xl 
                        justify-center items-center hover:bg-neutral-700 transition ease-in-out duration-150"
          >
            {currentProject === "baseballStats" ? (
              <div className="w-2 h-2 bg-green-100 rounded-full shadow-[0px_0px_10px_3.5px_rgba(56,255,156,1)]" />
            ) : (
              <div className="w-2 h-2 bg-neutral-400 rounded-full" />
            )}
            <Baseball size={30} color="#fff" weight="fill" />
          </button>

          <button
            onClick={() => setCurrentProject("photoTracker")}
            className="flex h-full w-full px-4 space-x-4 flex-row bg-neutral-900 border-gray-300 border-2 rounded-xl 
                        justify-center items-center hover:bg-neutral-700 transition ease-in-out duration-150"
          >
            {currentProject === "photoTracker" ? (
              <div className="w-2 h-2 bg-green-100 rounded-full shadow-[0px_0px_10px_3.5px_rgba(56,255,156,1)]" />
            ) : (
              <div className="w-2 h-2 bg-neutral-400 rounded-full" />
            )}
            <Key size={30} color="#fff" weight="fill" />
          </button>
          <button
            onClick={() => setCurrentProject("messenger")}
            className="flex h-full w-full px-4 space-x-4 flex-row bg-neutral-900 border-gray-300 border-2 rounded-xl 
                        justify-center items-center hover:bg-neutral-700 transition ease-in-out duration-150"
          >
            {currentProject === "messenger" ? (
              <div className="w-2 h-2 bg-green-100 rounded-full shadow-[0px_0px_10px_3.5px_rgba(56,255,156,1)]" />
            ) : (
              <div className="w-2 h-2 bg-neutral-400 rounded-full" />
            )}
            <Camera size={30} color="#fff" weight="fill" />
          </button>
          <button
            onClick={() => setCurrentProject("weatherApp")}
            className="flex h-full w-full px-4 rounded-r-lg space-x-4 flex-row bg-neutral-900 border-gray-300 
                        border-2 rounded-xl justify-center items-center hover:bg-neutral-700 transition ease-in-out duration-150"
          >
            {currentProject === "weatherApp" ? (
              <div className="w-2 h-2 bg-green-100 rounded-full shadow-[0px_0px_10px_3.5px_rgba(56,255,156,1)]" />
            ) : (
              <div className="w-2 h-2 bg-neutral-400 rounded-full" />
            )}
            <CloudSun size={30} color="#fff" weight="fill" />
          </button>
          <div
            className="flex h-full w-full px-4 rounded-r-lg flex-row bg-neutral-900 border-gray-300 border-2 rounded-xl 
                          justify-center items-center"
          >
            <h1 className="text-4xl font-lcd text-green-300 font-light whitespace-nowrap led-glow">
              {new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
