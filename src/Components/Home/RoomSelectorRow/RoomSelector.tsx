import React from "react";
import { useState } from "react";
import RoomSelectButton from "./RoomSelectButton";
import { AddOutlined } from "@mui/icons-material";

export interface Room {
  name: string;
  temperature: number;
  lights: Light[];
}

export interface Light {
  name: string;
  wattage: number;
  isOn: boolean;
  color: string;
}

const RoomSelector: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  const rooms: Room[] = [
    { name: "Living Room", temperature: 22, lights: [] },
    { name: "Master Bedroom", temperature: 20, lights: [] },
    { name: "Guest Bedroom", temperature: 21, lights: [] },
    { name: "Kitchen", temperature: 23, lights: [] },
    { name: "Office Space", temperature: 24, lights: [] },
    { name: "Bathroom", temperature: 19, lights: [] },
    { name: "Balcony", temperature: 18, lights: [] },
    { name: "Outdoor Shed", temperature: 18, lights: [] },
  ];

  const handleRoomSelection = (room: Room) => {
    setSelectedRoom(room);
  };

  const handleButtonClick = () => {};

  return (
    <div style={{ position: "relative" }}>
      <div className="room-selector-container">
        {rooms.map((room) => (
          <RoomSelectButton
            key={room.name}
            room={room}
            isSelected={selectedRoom?.name === room.name}
            onClick={handleRoomSelection}
          />
        ))}
      </div>
      <button
        data-tip="Add Room"
        style={{
          width: "25px",
          height: "25px",
          position: "absolute",
          right: -45,
          top: 25,
        }}
        className="border-full bg-lr-gradient items-center justify-center flex text-bwhite rounded-full"
        onClick={handleButtonClick}
        title="Add Room"
      >
        <AddOutlined className="w-6 h-6" />
      </button>
    </div>
  );
};

export default RoomSelector;
