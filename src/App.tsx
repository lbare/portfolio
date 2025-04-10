import { useState } from "react";
import "./App.css";
import TVFrame from "./components/TVFrame";
import TVContent from "./components/TVContent";
import BottomIcons from "./components/LinkIcons";

function App() {
  const [currentProject, setCurrentProject] = useState<number>(0);
  const [tvOn, setTvOn] = useState<boolean>(true);

  return (
    <div className="flex items-end justify-center h-screen w-screen bg-white">
      <div
        className="
          relative       /* so children can be absolutely positioned */
          w-full
          max-w-3/5 /* or any max width you like */
          aspect-[4/3]   /* keep the TV in a 4:3 ratio (optional) */
          flex items-center justify-center border
        "
      >
        <TVFrame
          currentProject={currentProject}
          setCurrentProject={setCurrentProject}
          tvOn={tvOn}
          setTvOn={setTvOn}
        />

        <TVContent currentProject={currentProject} />
        {/* <BottomIcons /> */}
      </div>
    </div>
  );
}

export default App;
