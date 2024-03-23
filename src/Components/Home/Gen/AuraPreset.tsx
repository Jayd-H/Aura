import React from "react";
import {
  EditOutlined,
  ScheduleOutlined,
  LightbulbOutlined,
  ThermostatOutlined,
  PowerSettingsNewRounded,
} from "@mui/icons-material";

import { PowerIcon } from "@heroicons/react/24/outline";

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
    <div className="relative w-72 h-40 rounded-xl font-montserrat bg-cover bg-center shadow-even border-gradient text-bwhite overflow-hidden">
      <img
        src={backgroundImage}
        alt={`${auraName} background`}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Gradient overlay for the top part */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-bblack to-transparent"></div>

      {/* Title and icons */}
      <div className="absolute top-1 left-3 right-4 flex justify-between items-center">
        <h2 className="text-xl font-bold">{auraName}</h2>
        <EditOutlined className="w-6 h-6 -mr-1" />
      </div>

      {/* Room name */}
      <div className="absolute top-7 left-3">
        <p className="text-lg ">{room}</p>
      </div>

      {/* Semi-transparent background for bottom row */}
      <div className="absolute bottom-0 left-0 right-0 mx-auto flex justify-center items-center text-sm space-x-8 bg-black bg-opacity-50 p-2">
        <div className="flex items-center space-x-1">
          <ScheduleOutlined className="w-4 h-4" />
          <span className="">
            {time} {time == "1" ? "Hr" : "Hrs"}
          </span>
        </div>
        <div className="flex items-center space-x-1">
          <LightbulbOutlined className="w-4 h-4" />
          <span className="">{hue} Hue</span>
        </div>
        <div className="flex items-center space-x-1">
          <ThermostatOutlined className="w-4 h-4" />
          <span className="">{temperature}°C</span>
        </div>
      </div>

      {/* Power button */}
      <button
        className={`absolute bottom-7 right-[-5px] rounded-full p-3 ${
          power ? "text-green-400" : ""
        }`}
        aria-label={power ? "Turn off" : "Turn on"}
      >
        <PowerIcon className="w-10 h-10 stroke-[3px] svg-drop-shadow" />
      </button>
    </div>
  );
};
export default AuraPreset;
