import React from "react";
import { AddBoxOutlined } from "@mui/icons-material";

const AuraManagerButton: React.FC = () => {
  const handleButtonClick = () => {
    // TODO Logic goes here
  };

  return (
    <div>
      <button
        className="bg-tb-gradient w-full h-full rounded-lg aura-manager-card font-montserrat font-bold text-lg text-bwhite hover:bg-lr-gradient-blue hover:shadow-2xl"
        onClick={handleButtonClick}
      >
        <p className="text-sm font-comfortaa mr-6 -mb-1">Add & Delete Auras</p>
        <p className="pl-4">
          Aura Manager <AddBoxOutlined className="w-10 h-10 -mt-4 " />
        </p>
      </button>
    </div>
  );
};

export default AuraManagerButton;
