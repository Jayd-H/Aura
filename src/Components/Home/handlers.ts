import type { Room, Light } from "./types";

export const handleRoomTemperatureChange = (setRooms: React.Dispatch<React.SetStateAction<Room[]>>, roomName: string, newTemp: number): void => {
  setRooms((prevRooms) =>
    prevRooms.map((room) =>
      room.name === roomName ? { ...room, temperature: newTemp } : room
    )
  );
};

export const handleRoomSelection = (setSelectedRoom: React.Dispatch<React.SetStateAction<Room | null>>, room: Room): void => {
  console.log("handleRoomSelection called with room:", room); 
  console.log("**** ROOM CHANGE ****"); // Added for debugging
  setSelectedRoom(room);
};


export const updateLightStatus = (
  rooms: Room[],
  roomName: string,
  lightName: string,
  newStatus: boolean
): Room[] => {
  return rooms.map((room) =>
    room.name === roomName
      ? {
          ...room,
          lights: room.lights.map((light) =>
            light.name === lightName ? { ...light, isOn: newStatus } : light
          ),
        }
      : room
  );
};

export const updateLightColour = (
  rooms: Room[],
  roomName: string,
  lightName: string,
  newColour: string
): Room[] => {
  return rooms.map((room) =>
    room.name === roomName
      ? {
          ...room,
          lights: room.lights.map((light) =>
            light.name === lightName ? { ...light, color: newColour } : light
          ),
        }
      : room
  );
};
