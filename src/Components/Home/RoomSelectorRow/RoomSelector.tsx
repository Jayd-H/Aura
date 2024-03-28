import React from "react";
import RoomSelectButton from "./RoomSelectButton";
import RoomSelectorPlus from "./RoomSelectorPlus";
import type { Room } from "../types";

interface RoomSelectorProps {
  rooms: Room[];
  onRoomSelect: (room: Room) => void;
  selectedRoom: Room | null;
}

const RoomSelector: React.FC<RoomSelectorProps> = ({
  rooms,
  onRoomSelect,
  selectedRoom,
}) => {
  const handleRoomSelection = (room: Room) => {
    onRoomSelect(room);
  };

  return (
    <div className="grid lg:grid-cols-4 grid-cols-2 gap-1">
      {rooms.map((room) => (
        <RoomSelectButton
          key={room.name}
          room={room}
          isSelected={selectedRoom?.name === room.name}
          onClick={handleRoomSelection}
        />
      ))}
    </div>
  );
};

export default RoomSelector;
