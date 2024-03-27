import React from "react";
import { LightbulbOutlined, FlashOnOutlined } from "@mui/icons-material";

import LightButton from "./LightButton";

const AddLight: React.FC = () => {
  const handleAddLight = () => {
    // TODO: Implement the logic to add a new light
  };

  const lightColor = "#D3D3D3";

  const lightStyle = {
    backgroundImage: `radial-gradient(circle at 50% 100%, ${lightColor}80, transparent)`,
    boxShadow: `inset 0 0 40px ${lightColor}80`,
  };

  return (
    <div
      className="light-card rounded-xl flex flex-col items-center justify-between p-4 font-montserrat relative overflow-hidden"
      style={lightStyle}
    >
      <div className="flex justify-between w-full">
        <LightbulbOutlined className="w-8 h-8 -mt-2 mb-12 -ml-2" />
      </div>
      <div className=" mb-2">
        <FlashOnOutlined className="" />
      </div>
      <div className="text-center">
        <p className="font-comfortaa text-lg">Add Light</p>
        <p className="font-semibold text-sm italic">
          No more lights to show, add another light in device manager
        </p>
      </div>
      <LightButton onClick={handleAddLight}>Add Light</LightButton>
    </div>
  );
};

export default AddLight;
