import React, { useEffect, useState } from "react";
import type { Light } from "../../types";
import {
  LightbulbOutlined,
  FlashOnOutlined,
  FlashOffOutlined,
  PowerSettingsNewOutlined,
} from "@mui/icons-material";
import LightIcon from "./LightIcon";
import LightOnIcon from "./LightOnIcon";
import LightButton from "./LightButton";

import { motion, AnimatePresence } from "framer-motion";

interface LightProps {
  light: Light;
  onLightToggle: (lightName: string, newStatus: boolean) => void;
  onLightSelect: (light: Light) => void;
  isSelected: boolean;
}

const LightComponent: React.FC<LightProps> = ({
  light,
  onLightToggle,
  onLightSelect,
  isSelected,
}) => {
  const [lightColor, setLightColor] = useState(
    light.isOn ? light.color : "#D3D3D3"
  );
  const textColor = isColorDark(lightColor) ? "#ECEBF9" : "#333040";

  useEffect(() => {
    setLightColor(light.isOn ? light.color : "#D3D3D3");
  }, [light]);

  const lightStyle = {
    backgroundImage: `radial-gradient(circle at 50% 100%, ${lightColor}80, transparent)`,
    boxShadow: `inset 0 0 40px ${lightColor}80`,
    color: textColor,
  };

  const handleToggle = () => {
    onLightToggle(light.name, !light.isOn);
  };

  const handleSelectLight = () => {
    onLightSelect(light);
  };

  const iconVariants = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
  };

  return (
    <div
      className={`light-card rounded-xl flex flex-col items-center justify-between p-4 font-montserrat relative overflow-hidden hover:bg-white hover:shadow-2xl ${
        isSelected
          ? "border-2 selected-light-card border-bblack border-dashed"
          : ""
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
      <div className="-mt-14 -mb-12">
        {light.isOn ? (
          <LightOnIcon color={textColor} />
        ) : (
          <LightIcon color={textColor} />
        )}
      </div>
      <button onClick={handleToggle} className="border-none cursor-pointer">
        <div className="mt-16 mb-2">
          <AnimatePresence mode="wait">
            {light.isOn ? (
              <motion.div
                key="on"
                variants={iconVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.1 }}
              >
                <FlashOnOutlined className="h-7 w-7" />
              </motion.div>
            ) : (
              <motion.div
                key="off"
                variants={iconVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.1 }}
              >
                <FlashOffOutlined className="h-7 w-7" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </button>
      <div className="text-center">
        <p className="font-comfortaa text-lg">{light.name}</p>
        <p className="font-semibold italic">{light.wattage}W</p>
      </div>
      <LightButton onClick={handleSelectLight}>Select</LightButton>
    </div>
  );
};

// Helper function to determine if a color is dark
function isColorDark(color: string): boolean {
  const hex = color.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness < 80;
}

export default LightComponent;
