import React from "react";

const About: React.FC = () => {
  return (
    <div
      className="w-full h-full bg-gradient-to-br from-[#313131] from-20% 
                  to-[#515151] to-100% bg-cover flex flex-col items-center justify-center 
                    outline-none"
    >
      <div className="absolute inset-0 pointer-events-none grain-overlay" />
      <div className="relative flex flex-col items-center justify-center h-full w-full z-10">
        <h1 className="text-center lg:text-4xl sm:text-4xl font-calistoga text-white">
          Test
        </h1>
      </div>
    </div>
  );
};

export default About;
