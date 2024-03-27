import React, { useState, useEffect } from "react";
import type { Light, Room } from "../../types";
import LightComponent from "./LightComponent";
import AddLight from "./AddLight";

import { updateLightStatus } from "../../handlers";

interface LightArrayProps {
  selectedRoom: Room;
  rooms: Room[];
  setRooms: React.Dispatch<React.SetStateAction<Room[]>>;
  selectedLight: Light | null;
  setSelectedLight: React.Dispatch<React.SetStateAction<Light | null>>;
}

const LightArray: React.FC<LightArrayProps> = ({
  selectedRoom,
  rooms,
  setRooms,
  selectedLight,
  setSelectedLight,
}) => {
  const [lightsState, setLightsState] = useState(selectedRoom.lights);

  useEffect(() => {
    const updatedLights =
      rooms.find((room) => room.name === selectedRoom.name)?.lights || [];
    setLightsState(updatedLights);
  }, [rooms, selectedRoom]);

  const handleLightToggle = (lightName: string, newStatus: boolean) => {
    const updatedRooms = updateLightStatus(
      rooms,
      selectedRoom.name,
      lightName,
      newStatus
    );
    setRooms(updatedRooms);
  };

  const handleLightSelect = (light: Light) => {
    setSelectedLight(light);
  };

  const renderLights = () => {
    const lightComponents = lightsState.map((light, index) => (
      <LightComponent
        key={light.name}
        light={light}
        onLightToggle={handleLightToggle}
        onLightSelect={handleLightSelect}
        isSelected={selectedLight?.name === light.name}
      />
    ));

    const remainingSlots = 8 - lightsState.length;
    const addLightComponents = Array.from({ length: remainingSlots }).map(
      (_, index) => <AddLight key={`add-light-${index}`} />
    );

    return [...lightComponents, ...addLightComponents];
  };

  return (
    <div className="light-array-container">
      <div className="light-grid">{renderLights()}</div>
    </div>
  );
};

export default LightArray;
