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

const projectComponents: Record<string, JSX.Element> = {
  about: <About />,
  alderGreens: <AlderGreens />,
  baseballStats: <BaseballStats />,
  uhub: <UHub />,
  photoTracker: <PhotoTracker />,
  messenger: <Messenger />,
  weatherApp: <WeatherApp />,
};

const TVContent: React.FC<TVContentProps> = ({ currentProject }) => {
  return (
    <div
      className="absolute overflow-hidden z-20 
                  top-[25%] left-[29%] lg:w-[31%] h-[45.5%]
                  sm:top-[20%] sm:left-[25%] sm:w-[60%] sm:h-[40%]
                  md:top-[25%] md:left-[29%] md:w-[31%] md:h-[45%]"
    >
      {projectComponents[currentProject] || <About />}
    </div>
  );
};

export default TVContent;
