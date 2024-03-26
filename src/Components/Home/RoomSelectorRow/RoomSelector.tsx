import React from "react";
import { useState } from "react";
import RoomSelectButton from "./RoomSelectButton";
import { AddOutlined } from "@mui/icons-material";
import type { Room } from "../HomePage";

interface RoomSelectorProps {
  rooms: Room[];
  onRoomSelect: (room: Room) => void;
}

const RoomSelector: React.FC<RoomSelectorProps> = ({ rooms, onRoomSelect }) => {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  const handleRoomSelection = (room: Room) => {
    setSelectedRoom(room);
    onRoomSelect(room);
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
