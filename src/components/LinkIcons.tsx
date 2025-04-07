import React from "react";
import { GithubLogo, FileText, At, DotsThree } from "@phosphor-icons/react";

const LinkIcons: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full px-60 pt-4 z-40">
      <div className="flex justify-center items-center p-4 space-x-24">
        <div className="flex flex-col items-center space-y-2 group">
          <button
            onClick={() => window.open("https://github.com/lbare", "_blank")}
            className="w-16 h-16 flex justify-center items-center border-4 bg-neutral-800 border-white shadow-[5px_5px_0_0_rgba(255,255,255,1)] rounded-full transform group-hover:-translate-y-2 transition duration-200"
          >
            <GithubLogo size={34} weight="fill" color="#fff" />
          </button>
          <h1 className="text-xl font-calistoga text-white opacity-0 transition delay-50 duration-200 group-hover:opacity-100 group-hover:-translate-y-2">
            Github
          </h1>
        </div>
        <div className="flex flex-col items-center space-y-2 group">
          <button className="w-16 h-16 flex justify-center items-center border-4 bg-neutral-800 border-white shadow-[5px_5px_0_0_rgba(255,255,255,1)] rounded-full transform transition group-hover:-translate-y-2 duration-200">
            <FileText size={34} color="#fff" weight="bold" />
          </button>
          <h1 className="text-xl font-calistoga text-white opacity-0 transition delay-50 duration-200 group-hover:opacity-100 group-hover:-translate-y-2">
            Resume
          </h1>
        </div>
        <div className="flex flex-col items-center space-y-2 group">
          <button
            onClick={() => window.open("mailto:levi.bare@gmail.com", "_blank")}
            className="w-16 h-16 flex justify-center items-center border-4 bg-neutral-800 border-white shadow-[5px_5px_0_0_rgba(255,255,255,1)] rounded-full transform transition group-hover:-translate-y-2 duration-200"
          >
            <At size={34} color="#fff" weight="bold" />
          </button>
          <h1 className="text-xl font-calistoga text-white opacity-0 transition delay-50 duration-200 group-hover:opacity-100 group-hover:-translate-y-2">
            Contact
          </h1>
        </div>
        <div className="flex flex-col items-center space-y-2 group">
          <button className="w-16 h-16 flex justify-center items-center border-4 bg-neutral-800 border-white shadow-[5px_5px_0_0_rgba(255,255,255,1)] rounded-full transform transition group-hover:-translate-y-2 duration-200">
            <DotsThree size={44} color="#fff" weight="bold" />
          </button>
          <h1 className="text-xl font-calistoga text-white opacity-0 transition delay-50 duration-200 group-hover:opacity-100 group-hover:-translate-y-2">
            More
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LinkIcons;
