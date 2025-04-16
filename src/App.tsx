import { useState, useEffect, useRef } from "react";
import "./App.css";
import TVFrame from "./components/TVFrame";
import TVContent from "./components/TVContent";
import TVFrameMobile from "./components/TVFrameMobile";
import { isMobileOnly, isTablet } from "react-device-detect";
import usePreloadImages from "./hooks/usePreloadImages";
import { ColorRing } from "react-loader-spinner";

function App() {
  const [currentProject, setCurrentProject] = useState<number>(0);
  const [fullScreen, setFullScreen] = useState<boolean>(false);
  const [tvOn, setTvOn] = useState<boolean>(false);
  const [shouldShake, setShouldShake] = useState<boolean>(false);
  const [powerOffAnimating, setPowerOffAnimating] = useState<boolean>(false);
  const firstRender = useRef(true);
  const images = usePreloadImages();

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    if (tvOn) {
      setShouldShake(true);
      const timer = setTimeout(() => {
        setShouldShake(false);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setPowerOffAnimating(true);
      const timer = setTimeout(() => {
        setPowerOffAnimating(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [tvOn]);

  if (!images) {
    return (
      <div className="flex items-center justify-center h-dvh w-screen bg-black overflow-hidden">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={["#D25C24", "#F79633", "#FEB256", "#EF7521", "#CF7A24FF"]}
        />
      </div>
    );
  }
  if (isMobileOnly) {
    return (
      <div
        className={`flex items-center justify-center h-dvh w-screen bg-[url('/src/assets/svg/lines.svg')] grayscale-100 brightness-50 transition-all duration-1000 ease-out overflow-hidden ${
          tvOn && "filter-none"
        }
          bg-auto bg-no-repeat bg-center`}
      >
        <div
          className={`relative h-full aspect-[4/3] flex items-center justify-center
              ${shouldShake ? "tv-shake" : ""}
              `}
        >
          <TVFrameMobile
            currentProject={currentProject}
            setCurrentProject={setCurrentProject}
            tvOn={tvOn}
            setTvOn={setTvOn}
            fullScreen={fullScreen}
            setFullScreen={setFullScreen}
          />
          <TVContent
            currentProject={currentProject}
            fullScreen={fullScreen}
            tvOn={tvOn}
          />
          {powerOffAnimating && (
            <div className="power-off-glow-mobile z-[60]" />
          )}
        </div>
      </div>
    );
  }

  if (isTablet) {
    return (
      <div
        className={`flex items-center justify-center h-dvh w-screen bg-[url('/src/assets/svg/lines.svg')] grayscale-100 brightness-50 transition-all duration-500 ease-out ${
          tvOn && "filter-none"
        } "bg-auto bg-no-repeat bg-center pt-6`}
      >
        <div
          className={`relative h-full aspect-[4/3] flex items-center justify-center ${
            shouldShake ? "tv-shake" : ""
          }`}
        >
          <TVFrame
            currentProject={currentProject}
            setCurrentProject={setCurrentProject}
            tvOn={tvOn}
            setTvOn={setTvOn}
            fullScreen={fullScreen}
            setFullScreen={setFullScreen}
          />
          <TVContent
            currentProject={currentProject}
            fullScreen={fullScreen}
            tvOn={tvOn}
          />
          {powerOffAnimating && <div className="power-off-glow z-[60]" />}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center h-dvh w-screen bg-[url('/src/assets/svg/lines.svg')] grayscale-100 brightness-50 transition-all duration-500 ease-out ${
        tvOn && "filter-none"
      } "bg-auto bg-no-repeat bg-center pt-6`}
    >
      <div
        className={`relative h-full aspect-[4/3] flex items-center justify-center ${
          shouldShake ? "tv-shake" : ""
        }`}
      >
        <TVFrame
          currentProject={currentProject}
          setCurrentProject={setCurrentProject}
          tvOn={tvOn}
          setTvOn={setTvOn}
          fullScreen={fullScreen}
          setFullScreen={setFullScreen}
        />
        <TVContent
          currentProject={currentProject}
          fullScreen={fullScreen}
          tvOn={tvOn}
        />
        {powerOffAnimating && <div className="power-off-glow z-[60]" />}
      </div>
    </div>
  );
}

export default App;
