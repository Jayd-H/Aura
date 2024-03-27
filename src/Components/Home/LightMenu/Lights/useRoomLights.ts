import { updateLightStatus } from '../../handlers';
import type { Room } from '../../types';

function useRoomLights(selectedRoom: Room, setRooms: React.Dispatch<React.SetStateAction<Room[]>>): [(lightName: string, newStatus: boolean) => void] {
  const toggleLight = (lightName: string, newStatus: boolean) => {
    updateLightStatus(setRooms, selectedRoom.name, lightName, newStatus);
  };

  return [toggleLight];
}

export default useRoomLights;