import { useState, useEffect } from "react";
import "./App.css";
import TVFrame from "./components/TVFrame";
import NavBar from "./components/NavBar";
import TVContent from "./components/TVContent";
import BottomIcons from "./components/BottomIcons";

function App() {
  const [currentProject, setCurrentProject] = useState<string>("about");
  useEffect(() => {
    console.log(`Current project: ${currentProject}`);
  }, [currentProject]);

  return (
    <div className="relative h-screen w-screen">
      <TVFrame />
      <NavBar
        currentProject={currentProject}
        setCurrentProject={setCurrentProject}
      />
      <TVContent currentProject={currentProject} />
      <BottomIcons />
    </div>
  );
}

export default App;
