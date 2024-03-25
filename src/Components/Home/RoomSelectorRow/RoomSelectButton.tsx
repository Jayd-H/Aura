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
      className={`room-select-button border-2 rounded-full font-montserrat font-bold text-sm font-bold ${
        isSelected ? "text-bwhite bg-lr-gradient" : "border-bpurple"
      }`}
      onClick={() => onClick(room)}
    >
      {room.name}
    </button>
  );
};

export default RoomSelectButton;
