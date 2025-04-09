import React from "react";

const About: React.FC = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-startGrad from-20% 
                  to-endGrad to-100% bg-cover flex flex-col items-center justify-center 
                    outline-none">
      <div className="absolute inset-0 pointer-events-none grain-overlay" />
      <div className="relative flex flex-col items-center justify-center h-full w-full z-10">
        <h1 className="text-center text-7xl font-calistoga text-white">
          Levi Bare
        </h1>
      </div>
    </div>
  );
};

export default About;
