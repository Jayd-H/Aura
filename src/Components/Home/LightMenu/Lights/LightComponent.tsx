import React from "react";
import type { Light, Room } from "../../types";
import {
  LightbulbOutlined,
  FlashOnOutlined,
  FlashOffOutlined,
  PowerSettingsNewOutlined,
} from "@mui/icons-material";

import LightIcon from "./LightIcon";

interface LightProps {
  light: Light;
  selectedRoom: Room;
  onLightClick: (lightName: string, newStatus: boolean) => void;
  isSelected: boolean;
  onSelectLight: (light: Light) => void;
}

const LightComponent: React.FC<LightProps> = ({
  light,
  selectedRoom,
  onLightClick,
  isSelected,
  onSelectLight,
}) => {
  const lightColor = light.isOn ? light.color : "#D3D3D3";
  const textColor =
    light.isOn && isColorDark(light.color) ? "#ECEBF9" : "#333040";

  const lightStyle = {
    backgroundImage: `radial-gradient(circle at 50% 100%, ${lightColor}80, transparent)`,
    boxShadow: `inset 0 0 40px ${lightColor}80`,
    color: textColor,
  };

  const handleToggle = () => {
    onLightClick(light.name, !light.isOn);
  };

  const handleSelectLight = () => {
    onSelectLight(light);
  };

  function isColorDark(color: string): boolean {
    const hex = color.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness < 128;
  }

  return (
    <div
      className={`rounded-xl flex flex-col items-center justify-between p-4 font-montserrat relative overflow-hidden ${
        isSelected ? "border-2 border-dashed border-bblack" : ""
      }`}
      style={lightStyle}
    >
      <div className="flex justify-between w-full">
        <LightbulbOutlined className="w-8 h-8 -mt-2 -ml-2" />
        <button onClick={handleToggle} className="border-none cursor-pointer">
          <PowerSettingsNewOutlined
            className="w-8 h-8 -mt-2 -mr-2"
            style={{ color: light.isOn ? "#126b2a" : "#FC5454" }}
          />
        </button>
      </div>
      <div className="-mt-12 -mb-12">
        <LightIcon color={textColor} />
      </div>
      <div className="mt-16 mb-2">
        {light.isOn ? (
          <FlashOnOutlined className="h-7 w-7" />
        ) : (
          <FlashOffOutlined className="h-7 w-7" />
        )}
      </div>
      <div className="text-center">
        <p className="font-comfortaa text-lg">{light.name}</p>
        <p className="font-semibold italic">{light.wattage}W</p>
      </div>
      <button
        className="mt-1 px-8 py-1 bg-bwhite text-bblack rounded-lg font-bold"
        onClick={handleSelectLight}
      >
        Select
      </button>
    </div>
  );
};

export default LightComponent;
