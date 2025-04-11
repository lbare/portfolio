import { useState } from "react";
import "./App.css";
import TVFrame from "./components/TVFrame";
import TVContent from "./components/TVContent";

function App() {
  const [currentProject, setCurrentProject] = useState<number>(0);
  const [tvOn, setTvOn] = useState<boolean>(true);

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-[url('/src/assets/svg/lines.svg')] bg-auto bg-no-repeat bg-center pt-6">
      <div
        className="
          relative       /* so children can be absolutely positioned */
          h-full
          max-w-fulls /* or any max width you like */
          aspect-[4/3]   /* keep the TV in a 4:3 ratio (optional) */
          flex items-center justify-center
        "
      >
        <TVFrame
          currentProject={currentProject}
          setCurrentProject={setCurrentProject}
          tvOn={tvOn}
          setTvOn={setTvOn}
        />
        <TVContent currentProject={currentProject} />
      </div>
    </div>
  );
}

export default App;
