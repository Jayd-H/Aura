import React from "react";
import { CogIcon } from "@heroicons/react/24/solid";
import { SettingsOutlined } from "@mui/icons-material";

const NavBar: React.FC<{ currentTime: string }> = ({ currentTime }) => {
  return (
    <nav className="text-bblack font-montserrat">
      <div className="mx-auto px-6 -my-1">
        <div className="flex justify-between items-center py-3">
          <h1 className="text-xl font-bold">Aura</h1>
          <div className="flex items-center">
            <SettingsOutlined className="w-6 h-6  mr-2" />
            <span className="font-bold text-lg">{currentTime}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
