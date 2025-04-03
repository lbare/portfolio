import "./App.css";
import {
  UserCircle,
  Code,
  FileText,
  At,
  DotsThree,
  Golf,
  MapPin,
  Camera,
  Playlist,
  Baseball,
  Key,
  CloudSun,
  MagnifyingGlass,
} from "@phosphor-icons/react";

function App() {
  return (
    <div className="relative h-screen w-screen">
      <img
        src="/src/assets/tv.png"
        alt="Retro TV Frame"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-30"
      />
      {/* Main TV content goes here */}
      <div
        className="absolute overflow-hidden z-20"
        style={{
          top: "23.5%",
          left: "16.5%",
          width: "49%",
          height: "48%",
        }}
      >
        <div className="flex flex-col h-full w-full border-4 border-neutral-800 overflow-hidden shadow-[30px_30px_0_0_rgba(38,38,38,1)]">
          {/* Nav Bar */}
          <div className="w-full h-1/12 bg-white border-b-4 border-neutral-800 flex items-center justify-between px-4 z-10">
            {/* Mimic macOS window controls */}
            <div className="flex space-x-2">
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            </div>
            {/* Main tabs */}
            <div className="w-full h-3/4 mx-6 flex justify-evenly items-center space-x-2">
              <button className="flex h-full w-auto px-8 bg-neutral-800 rounded-xl justify-center items-center">
                <h1 className="text-lg font-mono text-white whitespace-nowrap">
                  Personal Website
                </h1>
              </button>
              <button className="flex h-full w-full px-8 bg-neutral-500 rounded-xl justify-center items-center hover:scale-110 hover:bg-neutral-700 transition ease-in-out duration-150">
                <Golf size={32} color="#fff" weight="fill" />
              </button>
              <button className="flex h-full w-full px-8 bg-neutral-500 rounded-xl justify-center items-center hover:scale-110 hover:bg-neutral-700 transition ease-in-out duration-150">
                <MapPin size={32} color="#fff" weight="fill" />
              </button>
              <button className="flex h-full w-full px-8 bg-neutral-500 rounded-xl justify-center items-center hover:scale-110 hover:bg-neutral-700 transition ease-in-out duration-150">
                <Baseball size={32} color="#fff" weight="fill" />
              </button>
              <button className="flex h-full w-full px-8 bg-neutral-500 rounded-xl justify-center items-center hover:scale-110 hover:bg-neutral-700 transition ease-in-out duration-150">
                <Playlist size={32} color="#fff" />
              </button>
              <button className="flex h-full w-full px-8 bg-neutral-500 rounded-xl justify-center items-center hover:scale-110 hover:bg-neutral-700 transition ease-in-out duration-150">
                <Key size={32} color="#fff" weight="fill" />
              </button>
              <button className="flex h-full w-full px-8 bg-neutral-500 rounded-xl justify-center items-center hover:scale-110 hover:bg-neutral-700 transition ease-in-out duration-150">
                <Camera size={32} color="#fff" weight="fill" />
              </button>
              <button className="flex h-full w-full px-8 bg-neutral-500 rounded-xl justify-center items-center hover:scale-110 hover:bg-neutral-700 transition ease-in-out duration-150">
                <CloudSun size={32} color="#fff" weight="fill" />
              </button>
            </div>
          </div>

          {/* Main Content inside the TV Screen */}
          <div className="relative w-full h-full overflow-hidden">
            {/* Gradient background with content */}
            <div className="w-full h-full bg-gradient-to-br from-startGrad from-20% to-endGrad to-100% bg-cover flex flex-col items-center justify-center outline-none">
              <div className="absolute inset-0 pointer-events-none grain-overlay" />
              <div className="relative flex flex-col items-center justify-start h-full w-full z-10">
                <div className="h-1/3 flex justify-center items-end mb-16">
                  <h1 className="text-center text-9xl font-calistoga text-white mb-6">
                    Levi Bare
                  </h1>
                </div>
                <div className="w-3/4 p-6 border-4 border-neutral-800 bg-white rounded-full flex flex-row justify-start items-center mb-6">
                  <MagnifyingGlass size={36} color="#262626" weight="bold" />
                  <input
                    type="text"
                    placeholder='Try typing "projects" or tap an icon'
                    className="h-full w-2/3 ml-8 text-3xl font-calistoga text-left font-medium text-neutral-800 focus:outline-none"
                  />
                </div>
                {/* Icons */}
                <div className="flex w-2/3 justify-evenly items-center">
                  <button className="w-20 h-20 flex justify-center items-center mb-6 border-4 border-neutral-800 bg-white shadow-[7px_7px_0_0_rgba(38,38,38,1)] rounded-full transition duration-200 hover:bg-white/30">
                    <UserCircle size={54} weight="fill" color="#262626" />
                  </button>
                  <button className="w-20 h-20 flex justify-center items-center mb-6 border-4 border-neutral-800 bg-white shadow-[7px_7px_0_0_rgba(38,38,38,1)] rounded-full transition duration-200 hover:bg-white/30">
                    <Code size={44} color="#262626" weight="bold" />
                  </button>
                  <button className="w-20 h-20 flex justify-center items-center mb-6 border-4 border-neutral-800 bg-white shadow-[7px_7px_0_0_rgba(38,38,38,1)] rounded-full transition duration-200 hover:bg-white/30">
                    <FileText size={44} color="#262626" weight="bold" />
                  </button>
                  <button className="w-20 h-20 flex justify-center items-center mb-6 border-4 border-neutral-800 bg-white shadow-[7px_7px_0_0_rgba(38,38,38,1)] rounded-full transition duration-200 hover:bg-white/30">
                    <At size={44} color="#262626" weight="bold" />
                  </button>
                  <button className="w-20 h-20 flex justify-center items-center mb-6 border-4 border-neutral-800 bg-white shadow-[7px_7px_0_0_rgba(38,38,38,1)] rounded-full transition duration-200 hover:bg-white/30">
                    <DotsThree size={52} color="#262626" weight="bold" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* End of Main Content */}
        </div>
      </div>
    </div>
  );
}

export default App;
