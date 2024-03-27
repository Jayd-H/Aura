import { useState, useEffect } from 'react';
import { updateLightStatus } from '../../handlers';
import type { Room, Light } from '../../types';

function useRoomLights(selectedRoom: Room, setRooms: React.Dispatch<React.SetStateAction<Room[]>>): [Light[], (lightName: string, newStatus: boolean) => void] {
  const [lights, setLights] = useState<Light[]>(selectedRoom.lights);

  useEffect(() => {
    setLights(selectedRoom.lights);
  }, [selectedRoom]);

  const toggleLight = (lightName: string, newStatus: boolean) => {
    updateLightStatus(setRooms, selectedRoom.name, lightName, newStatus);
    setLights((prevLights) =>
      prevLights.map((light) =>
        light.name === lightName ? { ...light, isOn: newStatus } : light
      )
    );
  };

  return [lights, toggleLight];
}

export default useRoomLights;