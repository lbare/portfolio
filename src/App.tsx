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
} from "@phosphor-icons/react";

function App() {
  return (
    <div className="relative h-screen w-screen">
      <img
        src="/src/assets/tv.png"
        alt="Retro TV Frame"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-30 flex justify-center items-center"
      />

      {/* Nav Bar */}
      <div className="absolute h-1/6 top-0 left-0 w-full px-44 mt-14 z-40">
        <div className="w-full h-1/3 bg-white border-b-4 rounded-3xl border-4 border-neutral-800 flex items-center justify-between px-4 shadow-[10px_10px_0_0_rgba(38,38,38,1)]">
          {/* Mimic macOS window controls */}
          <div className="flex space-x-2">
            <div className="w-4 h-4 bg-red-500 rounded-full"></div>
            <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
          </div>
          {/* Main tabs */}
          <div className="flex h-full justify-evenly items-center space-x-2 flex-1 mx-6 py-2">
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
      </div>

      {/* TV Content Container */}
      <div
        className="absolute overflow-hidden z-20"
        style={{
          top: "23.5%",
          left: "16.5%",
          width: "49%",
          height: "48%",
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-startGrad from-20% to-endGrad to-100% bg-cover flex flex-col items-center justify-center outline-none">
          <div className="absolute inset-0 pointer-events-none grain-overlay" />
          <div className="relative flex flex-col items-center justify-start h-full w-full z-10">
            <div className="h-full flex justify-center items-center mb-16">
              <h1 className="text-center text-9xl font-calistoga text-white mb-6">
                Levi Bare
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Icons */}
      <div className="absolute bottom-0 left-0 w-full px-60 pb-24 z-40">
        <div className="flex justify-evenly items-center p-4">
          <button className="w-20 h-20 flex justify-center items-center border-4 bg-neutral-800 border-white shadow-[5px_5px_0_0_rgba(255,255,255,1)] rounded-full transition duration-200 hover:bg-white/30">
            <UserCircle size={54} weight="fill" color="#fff" />
          </button>
          <button className="w-20 h-20 flex justify-center items-center border-4 bg-neutral-800 border-white shadow-[5px_5px_0_0_rgba(255,255,255,1)] rounded-full transition duration-200 hover:bg-white/30">
            <Code size={44} color="#fff" weight="bold" />
          </button>
          <button className="w-20 h-20 flex justify-center items-center border-4 bg-neutral-800 border-white shadow-[5px_5px_0_0_rgba(255,255,255,1)] rounded-full transition duration-200 hover:bg-white/30">
            <FileText size={44} color="#fff" weight="bold" />
          </button>
          <button className="w-20 h-20 flex justify-center items-center border-4 bg-neutral-800 border-white shadow-[5px_5px_0_0_rgba(255,255,255,1)] rounded-full transition duration-200 hover:bg-white/30">
            <At size={44} color="#fff" weight="bold" />
          </button>
          <button className="w-20 h-20 flex justify-center items-center border-4 bg-neutral-800 border-white shadow-[5px_5px_0_0_rgba(255,255,255,1)] rounded-full transition duration-200 hover:bg-white/30">
            <DotsThree size={52} color="#fff" weight="bold" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
