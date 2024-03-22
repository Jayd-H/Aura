import React from "react";
import {
  SunIcon,
  ClockIcon,
  ShoppingCartIcon,
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
    <div className="relative rounded-xl overflow-hidden shadow-lg">
      <img
        src={backgroundImage}
        alt={`${auraName} background`}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-25" />
      <div className="absolute top-4 left-4 text-white">
        <h2 className="text-lg font-bold">{auraName}</h2>
        <p className="text-sm">{room}</p>
      </div>
      <div className="absolute bottom-4 left-4 text-white">
        <p className="flex items-center">
          <ClockIcon className="w-5 h-5 mr-1" />
          {time} Hours
        </p>
        <p className="flex items-center">
          {hue === "cool" ? (
            <SunIcon className="w-5 h-5 mr-1" />
          ) : (
            <ShoppingCartIcon className="w-5 h-5 mr-1" />
          )}
          {hue} Hue
        </p>
        <p className="flex items-center">
          <ShoppingCartIcon className="w-5 h-5 mr-1" />
          {temperature}°C
        </p>
      </div>
      <button
        className={`absolute top-4 right-4 rounded-full p-2 text-white ${
          power ? "bg-green-500" : "bg-gray-500"
        }`}
        aria-label={power ? "Turn off" : "Turn on"}
      ></button>
    </div>
  );
};

export default AuraPreset;
