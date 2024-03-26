import React from "react";
import { AddBoxOutlined } from "@mui/icons-material";

const AuraManagerButton: React.FC = () => {
  const handleButtonClick = () => {
    // TODO Logic goes here
  };

  return (
    <div>
      <button
        className="ml-16 bg-tb-gradient rounded-lg aura-manager-card font-montserrat font-bold text-lg text-bwhite"
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
