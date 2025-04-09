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
      className="absolute overflow-hidden z-10 
                  lg:top-[15.5%] lg:left-[25.5%] lg:w-[39%] lg:h-[52.5%]
                  sm:top-[20%] sm:left-[25%] sm:w-[60%] sm:h-[40%]
                  md:top-[15.5%] md:left-[25.5%] md:w-[51%] md:h-[45%]"
    >
      {projectComponents[currentProject] || <About />}
    </div>
  );
};

export default TVContent;
