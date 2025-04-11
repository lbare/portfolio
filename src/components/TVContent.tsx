import React from "react";
import About from "../projects/About";
import AlderGreens from "../projects/AlderGreens";
import BaseballStats from "../projects/BaseballStats";
import UHub from "../projects/UHub";
import PhotoTracker from "../projects/PhotoTracker";
import Messenger from "../projects/Messenger";
import WeatherApp from "../projects/WeatherApp";
import { isMobile } from "react-device-detect";

interface TVContentProps {
  currentProject: number;
  fullScreen: boolean;
}

const projectComponents = [
  About,
  UHub,
  AlderGreens,
  Messenger,
  PhotoTracker,
  BaseballStats,
  WeatherApp,
];

const TVContent: React.FC<TVContentProps> = ({
  currentProject,
  fullScreen,
}) => {
  const SelectedProject = projectComponents[currentProject] || About;

  if (isMobile) {
    return (
      <div className="absolute overflow-hidden z-0 top-[29%] left-[32%] w-[29%] h-[29%]">
        <SelectedProject fullScreen={fullScreen} />
      </div>
    );
  }

  return (
    <div className="absolute overflow-hidden z-0 top-[6%] left-[13%] w-[58.5%] h-[58%]">
      <SelectedProject fullScreen={fullScreen} />
    </div>
  );
};

export default TVContent;
