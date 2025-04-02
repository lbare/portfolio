import "./App.css";
import {
  UserCircle,
  Code,
  FileText,
  At,
  DotsThree,
} from "@phosphor-icons/react";

function App() {
  return (
    <div className="flex h-screen w-screen bg-orangeLight justify-center items-center">
      <div className="flex flex-col h-4/6 w-3/4 rounded-3xl border-4 border-neutral-800 overflow-hidden shadow-[30px_30px_0_0_rgba(38,38,38,1)]">
        {/* Nav Bar */}
        <div className="w-full h-1/12 bg-white border-b-4 border-neutral-800 flex items-center justify-between px-4 z-10">
          {/* Mimic macOS window controls */}
          <div className="flex space-x-2 border">
            <div className="w-4 h-4 bg-red-500 rounded-full"></div>
            <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
          </div>
          <div className="text-lg font-bold text-neutral-800 border">
            Portfolio
          </div>
        </div>
        {/* Main Content */}
        <div className="relative w-full h-full overflow-hidden">
          {/* Gradient background with content */}
          <div className="w-full h-full bg-gradient-to-br from-startGrad from-20% to-endGrad to-100% bg-cover flex flex-col items-center justify-center">
            <div className="absolute inset-0 pointer-events-none grain-overlay" />
            <div className="relative flex flex-col items-center justify-center h-full w-full z-10">
              <h1 className="h-1/4 text-center text-9xl font-calistoga text-white mb-6">
                Levi Bare
              </h1>
              <input
                type="text"
                placeholder='Try typing "projects" or tap an icon'
                className="w-3/4 p-6 border-4 border-neutral-800 bg-white rounded-full mb-6 text-3xl text-neutral-800"
              />
              <div className="flex w-2/3 justify-evenly items-center">
                <button className="w-20 h-20 flex justify-center items-center mb-6 border-4 border-neutral-800 bg-white shadow-[10px_10px_0_0_rgba(38,38,38,1)] rounded-full transition duration-200 hover:bg-transparent">
                  <UserCircle size={54} weight="fill" color="#262626" />
                </button>
                <button className="w-20 h-20 flex justify-center items-center mb-6 border-4 border-neutral-800 bg-white shadow-[10px_10px_0_0_rgba(38,38,38,1)] rounded-full transition duration-200 hover:bg-transparent">
                  <Code size={44} color="#262626" weight="bold" />
                </button>
                <button className="w-20 h-20 flex justify-center items-center mb-6 border-4 border-neutral-800 bg-white shadow-[10px_10px_0_0_rgba(38,38,38,1)] rounded-full transition duration-200 hover:bg-transparent">
                  <FileText size={44} color="#262626" weight="bold" />
                </button>
                <button className="w-20 h-20 flex justify-center items-center mb-6 border-4 border-neutral-800 bg-white shadow-[10px_10px_0_0_rgba(38,38,38,1)] rounded-full transition duration-200 hover:bg-transparent">
                  <At size={44} color="#262626" weight="bold" />
                </button>
                <button className="w-20 h-20 flex justify-center items-center mb-6 border-4 border-neutral-800 bg-white shadow-[10px_10px_0_0_rgba(38,38,38,1)] rounded-full transition duration-200 hover:bg-transparent">
                  <DotsThree size={52} color="#262626" weight="bold" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
