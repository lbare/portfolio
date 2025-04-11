import React, { JSX } from "react";
import About from "../projects/About";
import AlderGreens from "../projects/AlderGreens";
import BaseballStats from "../projects/BaseballStats";
import UHub from "../projects/UHub";
import PhotoTracker from "../projects/PhotoTracker";
import Messenger from "../projects/Messenger";
import WeatherApp from "../projects/WeatherApp";

interface TVContentProps {
  currentProject: string;
}

const projectComponents: Record<string, JSX.Element> = [
  <About />,
  <UHub />,
  <AlderGreens />,
  <Messenger />,
  <PhotoTracker />,
  <BaseballStats />,
  <WeatherApp />,
];

const TVContent: React.FC<TVContentProps> = ({ currentProject }) => {
  return (
    <div className="absolute overflow-hidden z-0 top-[6%] left-[13%] w-[58.5%] h-[58%]">
      {projectComponents[currentProject] || <About />}
    </div>
  );
};

export default TVContent;
