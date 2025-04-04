import React from "react";
import {
  Golf,
  MapPin,
  Baseball,
  Playlist,
  Key,
  Camera,
  CloudSun,
} from "@phosphor-icons/react";

const NavBar: React.FC = () => {
  return (
    <div className="absolute h-1/6 top-0 left-0 w-full px-60 mt-14 z-40">
      <div className="w-full border-4 border-neutral-300 h-1/3 rounded-lg flex items-center justify-between overflow-hidden shadow-[0px_0px_5px_0_rgba(255,255,255,1)]">
        {/* Main tabs */}
        <div className="flex h-full w-full justify-between items-center divide-x-2 divide-white/50">
          <button className="flex h-full w-full rounded-l-lg px-8 space-x-4 bg-neutral-800 justify-center items-center flex-row">
            <div className="w-2 h-2 bg-green-100 rounded-full shadow-[0px_0px_10px_3.5px_rgba(56,255,156,1)]" />
            <h1 className="text-lg font-mono text-white whitespace-nowrap">
              About Me
            </h1>
          </button>
          <button className="flex h-full w-full px-8 space-x-6 flex-row bg-neutral-800 justify-center items-center hover:bg-neutral-700 transition ease-in-out duration-150">
            <div className="w-2 h-2 bg-neutral-400 rounded-full" />
            <Golf size={32} color="#fff" weight="fill" />
          </button>
          <button className="flex h-full w-full px-8 space-x-6 flex-row bg-neutral-800 justify-center items-center hover:bg-neutral-700 transition ease-in-out duration-150">
            <div className="w-2 h-2 bg-neutral-400 rounded-full" />
            <MapPin size={32} color="#fff" weight="fill" />
          </button>
          <button className="flex h-full w-full px-8 space-x-6 flex-row bg-neutral-800 justify-center items-center hover:bg-neutral-700 transition ease-in-out duration-150">
            <div className="w-2 h-2 bg-neutral-400 rounded-full" />
            <Baseball size={32} color="#fff" weight="fill" />
          </button>
          <button className="flex h-full w-full px-8 space-x-6 flex-row bg-neutral-800 justify-center items-center hover:bg-neutral-700 transition ease-in-out duration-150">
            <div className="w-2 h-2 bg-neutral-400 rounded-full" />
            <Playlist size={32} color="#fff" />
          </button>
          <button className="flex h-full w-full px-8 space-x-6 flex-row bg-neutral-800 justify-center items-center hover:bg-neutral-700 transition ease-in-out duration-150">
            <div className="w-2 h-2 bg-neutral-400 rounded-full" />
            <Key size={32} color="#fff" weight="fill" />
          </button>
          <button className="flex h-full w-full px-8 space-x-6 flex-row bg-neutral-800 justify-center items-center hover:bg-neutral-700 transition ease-in-out duration-150">
            <div className="w-2 h-2 bg-neutral-400 rounded-full" />
            <Camera size={32} color="#fff" weight="fill" />
          </button>
          <button className="flex h-full w-full px-8 rounded-r-lg space-x-6 flex-row bg-neutral-800 justify-center items-center hover:bg-neutral-700 transition ease-in-out duration-150">
            <div className="w-2 h-2 bg-neutral-400 rounded-full" />
            <CloudSun size={32} color="#fff" weight="fill" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
