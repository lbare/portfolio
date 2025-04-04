// src/App.tsx
import "./App.css";
import TVFrame from "./components/TVFrame";
import NavBar from "./components/NavBar";
import TVContent from "./components/TVContent";
import BottomIcons from "./components/BottomIcons";

function App() {
  return (
    <div className="relative h-screen w-screen">
      <TVFrame />
      <NavBar />
      <TVContent />
      <BottomIcons />
    </div>
  );
}

export default App;
