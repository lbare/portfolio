import React from "react";

const TVContent: React.FC = () => {
  return (
    <div
      className="absolute overflow-hidden z-20"
      style={{
        top: "23.5%",
        left: "16.2%",
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
  );
};

export default TVContent;
