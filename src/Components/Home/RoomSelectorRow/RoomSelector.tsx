import React from "react";
import { useState } from "react";
import RoomSelectButton from "./RoomSelectButton";
import AddRoomButton from "./AddRoomButton";

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
    { name: "Balcony", temperature: 18, lights: [] },
  ];

  const handleRoomSelection = (room: Room) => {
    setSelectedRoom(room);
  };

  return (
    <div className="room-selector-container">
      {rooms.map((room) => (
        <RoomSelectButton
          key={room.name}
          room={room}
          isSelected={selectedRoom === room}
          onClick={handleRoomSelection}
        />
      ))}
      <AddRoomButton />
    </div>
  );
};

export default RoomSelector;
