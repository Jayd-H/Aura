import React from "react";
import {
  ShoppingCartIcon,
  SunIcon,
  ClockIcon,
  PowerIcon,
} from "@heroicons/react/24/outline";

type AuraPresetProps = {
  auraName: string;
  room: string;
  time: string;
  hue: string;
  power: boolean;
  temperature: string;
  backgroundImage: string;
};

export const AuraPreset: React.FC<AuraPresetProps> = ({
  auraName,
  room,
  time,
  hue,
  power,
  temperature,
  backgroundImage,
}) => {
  return (
    <div className="relative w-80 rounded-xl overflow-hidden text-bwhite border-2 font-montserrat border-red-300">
      <img
        src={backgroundImage}
        alt={`${auraName} background`}
        className="w-full h-full object-cover"
      />
      <div className="absolute" />
      <div className="absolute top-2 left-4 flex items-center space-x-2">
        <h2 className="text-xl font-bold">{auraName}</h2>
        <ShoppingCartIcon className="w-6 h-6" />
        <ShoppingCartIcon className="w-6 h-6" />
      </div>
      <div className="absolute top-9 left-4">
        <p className="text-lg">{room}</p>
      </div>
      <div className="absolute bottom-2 left-0 right-0 mx-auto flex justify-center items-center text-sm space-x-8">
        <div className="flex items-center space-x-1">
          <ClockIcon className="w-5 h-5" />
          <span className="">{time} Hours</span>
        </div>
        <div className="flex items-center space-x-1">
          {hue === "Cool" ? (
            <SunIcon className="w-5 h-5" />
          ) : (
            <ShoppingCartIcon className="w-5 h-5" />
          )}
          <span className="">{hue} Hue</span>
        </div>
        <div className="flex items-center space-x-1">
          <ShoppingCartIcon className="w-5 h-5" />
          <span className="">{temperature}°C </span>
        </div>
      </div>
      <button
        className={`absolute bottom-8 right-2 rounded-full p-3 ${
          power ? "text-green-400" : "text-bwhite"
        }`}
        aria-label={power ? "Turn off" : "Turn on"}
      >
        <PowerIcon className="w-8 h-8" />
      </button>
    </div>
  );
};
export default AuraPreset;
