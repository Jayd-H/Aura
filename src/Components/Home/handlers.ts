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


export const handleLightSelection = (setSelectedLight: React.Dispatch<React.SetStateAction<Light | null>>, light: Light): void => {
  setSelectedLight(light);
};

export const updateLightStatus = (
    setRooms: React.Dispatch<React.SetStateAction<Room[]>>,
    roomName: string,
    lightName: string,
    newStatus: boolean
) => {
    console.log("updateLightStatus called with:", roomName, lightName, newStatus);
    setRooms((prevRooms) => 
        prevRooms.map((room) =>
            room.name === roomName
            ? {
                ...room,
                lights: room.lights.map((light) =>
                    light.name === lightName ? { ...light, isOn: newStatus } : light
                ),
            }
            : room
        )
    );
};

export const handleLightColourChange = (
  setRooms: React.Dispatch<React.SetStateAction<Room[]>>,
  roomName: string,
  lightName: string,
  newColour: string
): void => {
  setRooms((prevRooms) =>
    prevRooms.map((room) =>
      room.name === roomName
        ? {
            ...room,
            lights: room.lights.map((light) =>
              light.name === lightName ? { ...light, color: newColour } : light
            ),
          }
        : room
    )
  );
};
