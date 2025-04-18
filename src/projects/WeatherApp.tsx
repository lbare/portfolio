import React, { useEffect, useState } from "react";
import { Code } from "@phosphor-icons/react";
import { isMobileOnly } from "react-device-detect";
import weather_1 from "../assets/images/weather-1.webp";
import weather_2 from "../assets/images/weather-2.webp";

interface WeatherAppProps {
  fullScreen: boolean;
}

const images: string[] = [weather_1, weather_2];

const WeatherApp: React.FC<WeatherAppProps> = ({ fullScreen }) => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearTimeout(timer);
  }, [index]);

  if (isMobileOnly && !fullScreen) {
    return (
      <div className="w-full h-full bg-gradient-to-tr from-[#5a5d5f] from-40% to-[#2f2f2f] to-100% bg-cover flex flex-col items-center justify-center outline-none">
        <div className="absolute inset-0 pointer-events-none grain-overlay z-10" />
        <div className="relative flex flex-col items-center justify-center h-full w-full z-0 p-4">
          <div className="flex flex-row items-center justify-center h-full w-full">
            <div className="flex flex-col items-center justify-evenly h-full w-4/6">
              <h1 className="text-center text-2xl font-calistoga text-white">
                Live Weather
              </h1>
              <div className="flex flex-col items-center justify-evenly h-5/6 w-full">
                <h1 className="font-albert text-xs text-white text-left">
                  Java application to display live weather data using the
                  OpenWeather API. This was my very first coding project, ever.
                  I like to keep it around to remember what got me into
                  programming and how far I have come since.
                </h1>
              </div>
              <div className="flex items-center justify-start h-1/6 space-x-2 w-full">
                <Code weight="bold" size={16} color="#FFCB8AFF" />
                <h1 className="text-xs font-albert font-semibold text-orangeLight text-left text-nowrap">
                  Java | JavaFX
                </h1>
              </div>
            </div>
            <div className="flex items-center justify-center h-full w-1/2">
              <img
                src={images[index]}
                alt="Weather Screenshot"
                className="h-5/6 w-auto rounded drop-shadow-screenshot"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (fullScreen) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-[#5a5d5f] from-20% to-[#2f2f2f] to-100% bg-cover flex flex-col items-center justify-center outline-none">
        <div className="absolute inset-0 pointer-events-none grain-overlay" />
        <div className="flex items-center justify-center h-full z-20">
          <img
            src={images[index]}
            alt="WeatherApp Screenshot"
            className="h-full w-auto"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-gradient-to-br from-[#5a5d5f] from-20% to-[#2f2f2f] to-100% bg-cover flex flex-col items-center justify-center outline-none">
      <div className="absolute inset-0 pointer-events-none grain-overlay z-10" />
      <div className="relative flex flex-col items-center justify-center h-full w-full z-0 px-4 p-4">
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
              src={images[index]}
              alt="WeatherApp Screenshot"
              className="h-5/6 w-auto rounded drop-shadow-screenshot"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
