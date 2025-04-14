import { useState, useEffect } from "react";
import "./App.css";
import TVFrame from "./components/TVFrame";
import TVContent from "./components/TVContent";
import TVFrameMobile from "./components/TVFrameMobile";
import { isMobile } from "react-device-detect";

function App() {
  const [currentProject, setCurrentProject] = useState<number>(0);
  const [fullScreen, setFullScreen] = useState<boolean>(false);
  const [tvOn, setTvOn] = useState<boolean>(true);

  const preloadImages = (imageUrls: string[]) => {
    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  };

  useEffect(() => {
    console.log("Preloading images...");
    preloadImages([
      "/src/assets/images/alderGreens-1.png",
      "/src/assets/images/alderGreens-2.png",
      "/src/assets/images/alderGreens-3.png",
      "/src/assets/images/alderGreens-4.png",
      "/src/assets/images/alderGreens-5.png",
      "/src/assets/images/alderGreens-6.png",
      "/src/assets/images/alderGreens-7.png",
      "/src/assets/images/baseballStats-1.png",
      "/src/assets/images/baseballStats-2.png",
      "/src/assets/images/baseballStats-3.png",
      "/src/assets/images/baseballStats-4.png",
      "/src/assets/images/baseballStats-5.png",
      "/src/assets/images/messenger-1.png",
      "/src/assets/images/photoTracker-1.png",
      "/src/assets/images/uhub-1.png",
      "/src/assets/images/weather-1.png",
      "/src/assets/images/weather-2.png",
    ]);
  }, []);

  if (isMobile) {
    return (
      <div className="flex items-center justify-center h-screen w-screen bg-[url('/src/assets/svg/lines.svg')] bg-auto bg-no-repeat bg-center">
        <div
          className="
          relative
          h-full
          aspect-[4/3]
          flex items-center justify-center
          mb-20
        "
        >
          <TVFrameMobile
            currentProject={currentProject}
            setCurrentProject={setCurrentProject}
            tvOn={tvOn}
            setTvOn={setTvOn}
            fullScreen={fullScreen}
            setFullScreen={setFullScreen}
          />
          <TVContent currentProject={currentProject} fullScreen={fullScreen} />
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-[url('/src/assets/svg/lines.svg')] bg-auto bg-no-repeat bg-center pt-6">
      <div
        className="
          relative
          h-full
          aspect-[4/3]
          flex items-center justify-center
        "
      >
        <TVFrame
          currentProject={currentProject}
          setCurrentProject={setCurrentProject}
          tvOn={tvOn}
          setTvOn={setTvOn}
          fullScreen={fullScreen}
          setFullScreen={setFullScreen}
        />
        <TVContent currentProject={currentProject} fullScreen={fullScreen} />
      </div>
    </div>
  );
}

export default App;
