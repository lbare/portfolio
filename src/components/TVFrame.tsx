import React from "react";

const TVFrame: React.FC = () => {
  return (
    <img
      src="/src/assets/tv.png"
      alt="Retro TV Frame"
      className="absolute inset-0 w-full h-full object-cover pointer-events-none z-30"
    />
  );
};

export default TVFrame;
