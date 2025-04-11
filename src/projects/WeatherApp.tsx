import React from "react";
import { Code } from "@phosphor-icons/react";
import weather_1 from "../assets/images/weather-1.png";

interface WeatherAppProps {
  fullScreen: boolean;
}

const WeatherApp: React.FC<WeatherAppProps> = ({ fullScreen }) => {
  if (fullScreen) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-[#5a5d5f] from-20% to-[#2f2f2f] to-100% bg-cover flex flex-col items-center justify-center outline-none">
        <div className="absolute inset-0 pointer-events-none grain-overlay" />
        <div className="flex items-center justify-center h-full">
          <img
            src={weather_1}
            alt="WeatherApp Screenshot"
            className="h-full w-auto rounded-3xl"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-gradient-to-br from-[#5a5d5f] from-20% to-[#2f2f2f] to-100% bg-cover flex flex-col items-center justify-center outline-none">
      <div className="absolute inset-0 pointer-events-none grain-overlay" />
      <div className="relative flex flex-col items-center justify-center h-full w-full z-10 px-4 p-4">
        <div className="flex flex-row items-center justify-evenly h-full w-full">
          <div className="flex flex-col items-center justify-evenly h-11/12 w-full">
            <h1 className="text-center text-4xl font-calistoga text-white">
              Live Weather
            </h1>
            <div className="flex flex-col items-center justify-evenly h-full w-full">
              <h1 className="font-albert text-md text-white text-left">
                Java application to display live weather data using the
                OpenWeather API. This was my very coding first project, ever. I
                like to keep it around to remember what got me into programming
                and how far I (hopefully) have come since.
              </h1>
            </div>
            <div className="flex items-center justify-start h-1/6 space-x-2 w-full">
              <Code weight="bold" size={32} color="#FFCB8AFF" />
              <h1 className="text-lg font-albert font-semibold text-orangeLight text-left">
                Java | JavaFX
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-center h-full w-4/5">
            <img
              src={weather_1}
              alt="WeatherApp Screenshot"
              className="h-5/6 w-auto rounded-lg drop-shadow-screenshot"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
