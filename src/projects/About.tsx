import React from "react";
import about from "../assets/images/about.png";
import { isMobile } from "react-device-detect";
import { FileText, At, DotsThree } from "@phosphor-icons/react";
import Resume from "../assets/pdf/Levi_Bare_Resume.pdf";

interface AboutProps {
  fullScreen: boolean;
}

const About: React.FC<AboutProps> = ({ fullScreen }) => {
  if (isMobile && !fullScreen) {
    return (
      <div className="w-full h-full bg-gradient-to-tr from-[#313131] from-20% to-[#515151] to-100% bg-cover flex flex-col items-center justify-center outline-none">
        <div className="absolute inset-0 pointer-events-none grain-overlay z-10" />
        <div className="relative flex flex-col items-center justify-center h-full w-full z-0 p-4">
          <div className="flex flex-row items-center justify-center h-full w-full">
            <div className="flex flex-col items-center justify-evenly h-full w-4/6">
              <h1 className="text-center text-2xl font-calistoga text-white">
                Home
              </h1>
              <div className="flex flex-col items-center justify-evenly h-5/6 w-full">
                <h1 className="font-albert text-xs text-white text-left">
                  Hi! I'm Levi, a recent software engineer grad living in
                  Victoria, BC looking for work. Feel free to check out some of
                  my projects using the buttons on the VCR below, or checkout my
                  resume or LinkedIn using the buttons on this screen.
                </h1>
              </div>
              <div className="flex items-start flex-row justify-center h-1/6 space-x-4 w-full">
                <a href={Resume} target="_blank" rel="noopener noreferrer">
                  <button className="w-10 h-10 flex justify-center items-center border-2 bg-neutral-800 border-white rounded-full">
                    <FileText size={18} color="#fff" weight="bold" />
                  </button>
                </a>
                <a
                  href="https://www.linkedin.com/in/levibare"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="w-10 h-10 flex justify-center items-center border-2 bg-neutral-800 border-white rounded-full">
                    <At size={18} color="#fff" weight="bold" />
                  </button>
                </a>
                <button
                  className="w-10 h-10 flex justify-center items-center border-2 bg-neutral-800 border-white rounded-full"
                  onClick={() =>
                    window.open(
                      "https://www.flickr.com/photos/133845330@N05/",
                      "_blank"
                    )
                  }
                >
                  <DotsThree size={18} color="#fff" weight="bold" />
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center h-full w-1/2">
              <img
                src={about}
                alt="About Screenshot"
                className="h-5/6 w-auto rounded-xl drop-shadow-screenshot"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (fullScreen) {
    <div className="w-full h-full bg-gradient-to-tr from-[#313131] from-20% to-[#515151] to-100% bg-cover flex flex-col items-center justify-center outline-none">
      <div className="absolute inset-0 pointer-events-none grain-overlay" />
      <div className="flex items-center justify-center h-full z-20">
        <img src={about} alt="About Screenshot" className="h-full w-auto" />
      </div>
    </div>;
  }

  return (
    <div className="w-full h-full bg-gradient-to-tr from-[#313131] from-20% to-[#515151] to-100% bg-cover flex flex-col items-center justify-center outline-none">
      <div className="absolute inset-0 pointer-events-none grain-overlay z-30" />
      <div className="relative flex flex-col items-center justify-center h-full w-full z-0 p-4">
        <div className="flex flex-row items-center justify-center h-full w-full">
          <div className="flex flex-col items-center justify-evenly h-5/6 w-full">
            <h1 className="text-center text-3xl font-calistoga text-white">
              Home
            </h1>
            <div className="flex flex-col items-center justify-evenly h-5/6 w-full">
              <h1 className="font-albert text-lg text-white text-left">
                Hi! I'm Levi, a recent software engineer graduate living in
                Victoria, BC looking for work. Feel free to check out some of my
                projects using the buttons on the VCR below, or checkout my
                resume or LinkedIn using the buttons on this screen.
              </h1>
            </div>
            <div className="flex items-start flex-row justify-center h-1/6 space-x-6 w-full">
              <div className="flex items-center justify-center flex-col group">
                <button
                  className="w-18 h-18 flex justify-center items-center border-4 bg-neutral-800 border-white rounded-full transition duration-200 group-hover:bg-white/30 group-hover:translate-y-0 translate-y-2"
                  style={{ pointerEvents: "auto" }}
                  onClick={() => console.log("Resume button clicked")}
                >
                  <FileText size={36} color="#fff" weight="bold" />
                </button>
                <h1 className="text-md font-albert opacity-0 text-white text-left text-nowrap group-hover:opacity-100 delay-100 transition duration-200 group-hover:translate-y-0 translate-y-2">
                  Resume
                </h1>
              </div>
              <div className="flex items-center justify-center flex-col group">
                <button className="w-18 h-18 flex justify-center items-center border-4 bg-neutral-800 border-white rounded-full transition duration-200 hover:bg-white/30 group-hover:translate-y-0 translate-y-2">
                  <At size={36} color="#fff" weight="bold" />
                </button>
                <h1 className="text-md font-albert opacity-0 text-white text-left text-nowrap group-hover:opacity-100 delay-100 transition duration-200 group-hover:translate-y-0 translate-y-2">
                  LinkedIn
                </h1>
              </div>
              <div className="flex items-center justify-center flex-col group">
                <button className="w-18 h-18 flex justify-center items-center border-4 bg-neutral-800 border-white rounded-full transition duration-200 hover:bg-white/30 group-hover:translate-y-0 translate-y-2">
                  <DotsThree size={36} color="#fff" weight="bold" />
                </button>
                <h1 className="text-md font-albert opacity-0 text-white text-left text-nowrap group-hover:opacity-100 delay-100 transition duration-200 group-hover:translate-y-0 translate-y-2">
                  Photos
                </h1>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center h-full w-2/3">
            <img
              src={about}
              alt="About Screenshot"
              className="h-5/6 w-auto rounded-xl drop-shadow-screenshot"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
