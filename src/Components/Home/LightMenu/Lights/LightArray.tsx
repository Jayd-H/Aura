import React, { useEffect } from "react";
import type { Light, Room } from "../../types";
import LightComponent from "./LightComponent";
import useRoomLights from "./useRoomLights";
import AddLight from "./AddLight";

interface LightArrayProps {
  selectedRoom: Room;
  setRooms: React.Dispatch<React.SetStateAction<Room[]>>;
  selectedLight: Light | null;
  setSelectedLight: React.Dispatch<React.SetStateAction<Light | null>>;
}

const LightArray: React.FC<LightArrayProps> = ({
  selectedRoom,
  setRooms,
  selectedLight,
  setSelectedLight,
}) => {
  const [lights, toggleLight] = useRoomLights(selectedRoom, setRooms);

  const handleLightClick = (lightName: string, newStatus: boolean) => {
    toggleLight(lightName, newStatus);
    setSelectedLight(lights.find((light) => light.name === lightName) || null);
  };

  const renderLights = () => {
    const lightComponents = lights.map((light, index) => (
      <LightComponent
        key={index}
        light={light}
        onLightClick={handleLightClick}
        selectedRoom={selectedRoom}
        isSelected={selectedLight?.name === light.name}
        onSelectLight={setSelectedLight}
      />
    ));

    const remainingSlots = 8 - lights.length;
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
