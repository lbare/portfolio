import React from "react";
import {
  UserCircle,
  Code,
  FileText,
  At,
  DotsThree,
} from "@phosphor-icons/react";

const BottomIcons: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full px-60 pt-12 z-40">
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
  );
};

export default BottomIcons;
