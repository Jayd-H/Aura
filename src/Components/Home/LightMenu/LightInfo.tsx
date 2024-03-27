import React, { useState, useEffect } from "react";
import { SketchPicker, type ColorResult } from "@hello-pangea/color-picker";
import type { Light, Room } from "../types";
import { motion } from "framer-motion";
import { PaletteOutlined, FormatPaintOutlined } from "@mui/icons-material";
import { updateLightColour } from "../handlers";

interface LightInfoProps {
  selectedLight: Light | null;
  selectedRoom: Room | null;
  rooms: Room[];
  setRooms: React.Dispatch<React.SetStateAction<Room[]>>;
}

const LightInfo: React.FC<LightInfoProps> = ({
  selectedLight,
  selectedRoom,
  rooms,
  setRooms,
}) => {
  const [color, setColor] = useState(selectedLight?.color || "#ffffff");

  useEffect(() => {
    setColor(selectedLight?.color || "#ffffff");
  }, [selectedLight]);

  const handleColorChange = (newColor: ColorResult) => {
    const hexColor = newColor.hex;
    setColor(hexColor);

    if (selectedLight && selectedRoom) {
      const updatedRooms = updateLightColour(
        rooms,
        selectedRoom.name,
        selectedLight.name,
        hexColor
      );
      setRooms(updatedRooms);
    }
  };
  return (
    <div className="room-card bg-bwhite px-4 py-3 flex flex-col items-center font-montserrat text-bblack border-dashed border-2 border-bblack rounded-2xl">
      {selectedLight ? (
        <>
          <div className="flex justify-between w-full">
            <PaletteOutlined />
            <FormatPaintOutlined />
          </div>
          <h2 className="-mt-6 mb-2 text-lg italic flex items-center justify-center">
            Selected Light
          </h2>
          <h2 className="font-semibold font-comfortaa text-xl flex items-center justify-center">
            {selectedLight.name}
          </h2>
          <motion.div
            whileHover={{ scale: 1.5, y: -20 }}
            transition={{
              duration: 0.2,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
          >
            <div className="text-center">
              <SketchPicker
                color={color}
                onChange={handleColorChange}
                className="bg-white border-2 border-bblack scale-90 -mt-3"
              />
            </div>
          </motion.div>
        </>
      ) : (
        <div className="flex items-center justify-center h-full">
          <p className="text-center">Please select a light.</p>
        </div>
      )}
    </div>
  );
};

export default LightInfo;
