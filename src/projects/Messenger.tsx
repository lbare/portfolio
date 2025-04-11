import React from "react";
import { Code } from "@phosphor-icons/react";
import messenger_1 from "../assets/images/messenger-1.png";

interface MessengerProps {
  fullScreen: boolean;
}

const Messenger: React.FC<MessengerProps> = ({ fullScreen }) => {
  if (fullScreen) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-[#1f1f1f] from-20% to-[#4c1515] to-100% bg-cover flex flex-col items-center justify-center outline-none">
        <div className="absolute inset-0 pointer-events-none grain-overlay" />
        <div className="flex items-center justify-center h-full z-20">
          <img
            src={messenger_1}
            alt="Messenger Screenshot"
            className="h-full w-auto"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-gradient-to-br from-[#1f1f1f] from-20% to-[#4c1515] to-100% bg-cover flex flex-col items-center justify-center outline-none">
      <div className="absolute inset-0 pointer-events-none grain-overlay" />
      <div className="relative flex flex-col items-center justify-center h-full w-full z-10 px-4 p-4">
        <div className="flex flex-row items-center justify-evenly h-full w-full">
          <div className="flex flex-col items-center justify-evenly h-11/12 w-4/6">
            <h1 className="text-center text-3xl font-calistoga text-white">
              Secure Messenger
            </h1>
            <div className="flex flex-col items-center justify-evenly h-5/6 w-full">
              <h1 className="font-albert text-md text-white text-left">
                End-to-end-encrypted CLI messenger with perfect forward secrecy,
                created as a class group project.
              </h1>
              <div className="flex w-full justify-start items-start">
                <ul className="list-disc list-outside pl-2 font-albert text-sm text-white text-left">
                  <li>Client & server share DH-derived session keys</li>
                  <li>Local DB keeps messages AES-GCM encrypted</li>
                  <li>Six message types for auth, key-exchange & chat</li>
                  <li>Uses AES-GCM, HMAC-SHA-256, SHA-512, PBKDF2</li>
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-start h-1/6 space-x-2 w-full">
              <Code weight="bold" size={32} color="#FFCB8AFF" />
              <h1 className="text-lg font-albert font-semibold text-orangeLight text-left">
                Python
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-center h-full w-4/5">
            <img
              src={messenger_1}
              alt="Messenger Screenshot"
              className="h-4/6 w-auto rounded-md drop-shadow-screenshot"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messenger;
