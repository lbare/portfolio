import React, { useState, useEffect } from "react";
import About from "../projects/About";
import AlderGreens from "../projects/AlderGreens";
import BaseballStats from "../projects/BaseballStats";
import UHub from "../projects/UHub";
import PhotoTracker from "../projects/PhotoTracker";
import Messenger from "../projects/Messenger";
import WeatherApp from "../projects/WeatherApp";
import { isMobileOnly, isTablet } from "react-device-detect";

interface TVContentProps {
  currentProject: number;
  fullScreen: boolean;
  tvOn: boolean;
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
  tvOn,
}) => {
  const SelectedProject = projectComponents[currentProject] || About;
  const [flicker, setFlicker] = useState<boolean>(false);

  const flickerOverlay = flicker ? <div className="flicker-overlay" /> : null;

  useEffect(() => {
    if (tvOn) {
      setFlicker(true);
      const flickerTimer = setTimeout(() => {
        setFlicker(false);
      }, 350);
      return () => clearTimeout(flickerTimer);
    }
  }, [currentProject, tvOn]);

  if (isMobileOnly) {
    return (
      <div className="absolute overflow-hidden z-0 top-[16%] left-[31%] w-[38.5%] h-[38.5%]">
        <SelectedProject fullScreen={fullScreen} />
        {flickerOverlay}
      </div>
    );
  }

  if (isTablet) {
    return (
      <div className="absolute overflow-hidden z-0 top-[6%] left-[13%] w-[58%] h-[58%]">
        <SelectedProject fullScreen={fullScreen} />
        {flickerOverlay}
      </div>
    );
  }

  return (
    <div className="absolute overflow-hidden z-0 top-[6%] left-[13%] w-[58.5%] h-[58%]">
      <SelectedProject fullScreen={fullScreen} />
      {flickerOverlay}
    </div>
  );
};

export default TVContent;
