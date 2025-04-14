import React, { useEffect, useState } from "react";
import { Code } from "@phosphor-icons/react";
import { isMobile } from "react-device-detect";
import photoTracker_1 from "../assets/images/photoTracker-1.jpeg";
import photoTracker_2 from "../assets/images/photoTracker-2.jpeg";

interface PhotoTrackerProps {
  fullScreen: boolean;
}

const images: string[] = [photoTracker_1, photoTracker_2];

const PhotoTracker: React.FC<PhotoTrackerProps> = ({ fullScreen }) => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearTimeout(timer);
  }, [index]);

  if (fullScreen) {
    return (
      <div className="w-full h-full bg-gradient-to-tr from-[#2e5835] from-20% to-[#1b4569] to-100% bg-cover flex flex-col items-center justify-center outline-none">
        <div className="absolute inset-0 pointer-events-none grain-overlay" />
        <div className="flex items-center justify-center h-full z-20">
          <img
            src={images[index]}
            alt="PhotoTracker Screenshot"
            className="h-full w-auto"
          />
        </div>
      </div>
    );
  }

  if (isMobile) {
    return (
      <div className="w-full h-full bg-gradient-to-tr from-[#2e5835] from-40% to-[#1b4569] to-100% bg-cover flex flex-col items-center justify-center outline-none">
        <div className="absolute inset-0 pointer-events-none grain-overlay z-10" />
        <div className="relative flex flex-col items-center justify-center h-full w-full z-0 p-4">
          <div className="flex flex-row items-center justify-center h-full w-full">
            <div className="flex flex-col items-center justify-evenly h-full w-4/6">
              <h1 className="text-center text-2xl font-calistoga text-white">
                FilmEXIF
              </h1>
              <div className="flex flex-col items-center justify-evenly h-5/6 w-full">
                <h1 className="font-albert text-xs text-white text-left">
                  A camera tool to store time, location and other metadata to
                  keep track of individual film rolls.
                </h1>
                <div className="flex w-full justify-start items-start">
                  <ul className="list-disc list-outside pl-3 font-albert text-xs text-white text-left">
                    <li>Add a photo to log time and location</li>
                    <li>Mark rolls as shot, developed, or scanned</li>
                    <li>Export JSON metadata to Lightroom for auto-tagging</li>
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
                src={images[index]}
                alt="PhotoTracker Screenshot"
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

  return (
    <div className="w-full h-full bg-gradient-to-tr from-[#2e5835] from-20% to-[#1b4569] to-100% bg-cover flex flex-col items-center justify-center outline-none">
      <div className="absolute inset-0 pointer-events-none grain-overlay z-10" />
      <div className="relative flex flex-col items-center justify-center h-full w-full z-0 px-4 p-4">
        <div className="flex flex-row items-center justify-evenly h-full w-full">
          <div className="flex flex-col items-center justify-evenly h-5/6 w-full">
            <h1 className="text-center text-4xl font-calistoga text-white">
              FilmEXIF
            </h1>
            <div className="flex flex-col items-center justify-evenly h-5/6 w-full">
              <h1 className="font-albert text-md text-white text-left">
                A camera tool to store time, location and other metadata to keep
                track of individual film rolls.
              </h1>
              <div className="flex w-full justify-start items-start">
                <ul className="list-disc list-outside pl-2 font-albert text-md text-white text-left">
                  <li>Add a photo to log time and location</li>
                  <li>Mark rolls as shot, developed, or scanned</li>
                  <li>Export JSON metadata to Lightroom for auto-tagging</li>
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
              src={images[index]}
              alt="PhotoTracker Screenshot"
              className="h-5/6 w-auto rounded-xl drop-shadow-screenshot"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoTracker;
