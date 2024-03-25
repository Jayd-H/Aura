import React from "react";
import type { Room } from "./RoomSelector";

interface RoomSelectButtonProps {
  room: Room;
  isSelected: boolean;
  onClick: (room: Room) => void;
}

const RoomSelectButton: React.FC<RoomSelectButtonProps> = ({
  room,
  isSelected,
  onClick,
}) => {
  return (
    <button
      className={`room-select-button border-2 rounded-full font-comfortaa font-semibold ${
        isSelected ? "text-bwhite bg-bpurple" : "border-bpurple"
      }`}
      onClick={() => onClick(room)}
    >
      {room.name}
    </button>
  );
};

export default RoomSelectButton;
