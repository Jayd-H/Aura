import React, { useState, useEffect } from "react";
import type { Room } from "../HomePage";
import { VisibilityOutlined, FlareOutlined } from "@mui/icons-material";

interface RoomCardProps {
  room: Room;
  onTemperatureChange: (roomName: string, newTemp: number) => void;
}

const RoomCard: React.FC<RoomCardProps> = ({ room, onTemperatureChange }) => {
  const [temperature, setTemperature] = useState(room.temperature);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    setTemperature(room.temperature);
  }, [room]);

  const handleTemperatureChange = (event: React.MouseEvent<HTMLDivElement>) => {
    const sliderWidth = event.currentTarget!.clientWidth;
    const clickX =
      event.clientX - event.currentTarget!.getBoundingClientRect().left;
    const percentage = clickX / sliderWidth;
    const newTemp = Math.max(Math.round(percentage * 20) + 10, 13);

    setTemperature(newTemp);
    onTemperatureChange(room.name, newTemp);
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    handleTemperatureChange(event);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      handleTemperatureChange(event);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="room-card bg-bwhite px-4 py-3 flex flex-col items-center font-montserrat text-bblack border-dashed border-2 border-bblack rounded-2xl">
      <div className="flex justify-between w-full">
        <VisibilityOutlined />
        <FlareOutlined />
      </div>
      <h2 className=" -mt-6 mb-2 text-lg italic flex items-center justify-center">
        Selected Room
      </h2>
      <h2 className="font-semibold font-comfortaa text-xl mb-1 flex items-center justify-center">
        {room.name}
      </h2>
      <div
        className="relative w-full h-10 rounded-full border-2 border-bblack"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div
          className="absolute left-0 top-0 rounded-full bg-temp-gradient h-full"
          style={{ width: `${((temperature - 10) / 20) * 100}%` }}
        ></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-xl font-bold select-none">{temperature}°C</p>
        </div>
      </div>
      <h2 className="text-center text-sm px-3 mt-2 mb-2 items-center">
        Change temperature of the room by using the slider
      </h2>
    </div>
  );
};

export default RoomCard;
