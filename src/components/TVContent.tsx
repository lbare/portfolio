import React, { useState, useEffect } from "react";
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

  if (isMobile) {
    return (
      <div className="absolute overflow-hidden z-0 top-[21%] left-[33.5%] w-[33%] h-[33%]">
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
