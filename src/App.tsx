import { useState } from "react";
import "./App.css";
import TVFrame from "./components/TVFrame";
import TVContent from "./components/TVContent";
import TVFrameMobile from "./components/TVFrameMobile";
import { isMobile } from "react-device-detect";

function App() {
  const [currentProject, setCurrentProject] = useState<number>(0);
  const [fullScreen, setFullScreen] = useState<boolean>(false);
  const [tvOn, setTvOn] = useState<boolean>(false);

  if (isMobile) {
    return (
      <div
        className={`flex items-center justify-center h-screen w-screen bg-[url('/src/assets/svg/lines.svg')] grayscale-100 brightness-50 transition-all duration-1000 ease-out ${
          tvOn && "filter-none"
        }
        bg-auto bg-no-repeat bg-center`}
      >
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
    <div
      className={`flex items-center justify-center h-screen w-screen bg-[url('/src/assets/svg/lines.svg')] grayscale-100 brightness-50 transition-all duration-1000 ease-out ${
        tvOn && "filter-none"
      } "bg-auto bg-no-repeat bg-center pt-6`}
    >
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
