import React from "react";
import type { Room } from "../types";

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
      className={`h-8 border-2 rounded-full font-montserrat text-sm font-bold hover:bg-lr-gradient-blue hover:text-bwhite hover:border-bwhite hover:border-0 hover:shadow-lg ${
        isSelected ? "text-bwhite bg-lr-gradient" : "border-bpurple"
      }`}
      onClick={() => onClick(room)}
    >
      {room.name}
    </button>
  );
};

export default RoomSelectButton;
