import { useState } from "react";
import "./App.css";
import TVFrame from "./components/TVFrame";
import TVContent from "./components/TVContent";

function App() {
  const [currentProject, setCurrentProject] = useState<number>(0);
  const [fullScreen, setFullScreen] = useState<boolean>(false);
  const [tvOn, setTvOn] = useState<boolean>(true);

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
          setFullScreen={setFullScreen}
        />
        <TVContent currentProject={currentProject} fullScreen={fullScreen} />
      </div>
    </div>
  );
}

export default App;
