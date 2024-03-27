import React, { useState } from "react";

import AuraPreset from "./AuraPreset/AuraPreset";
import NavBar from "./Gen/Navbar";
import GreetingCard from "./Gen/GreetingCard";
import MiniCardRow from "./MiniCards/MiniCardRow";
import PowerConsumptionChart from "./Savings/PowerConsumptionChart";
import SavingsCard from "./Savings/SavingsCard";
import RoomSelector from "./RoomSelectorRow/RoomSelector";
import AuraManagerButton from "./AuraPreset/AuraManagerButton";
import RoomCard from "./LightMenu/RoomCard";
import LightArray from "./LightMenu/Lights/LightArray";
import LightInfo from "./LightMenu/LightInfo";
import AuraPresetManager from "./AuraPreset/AuraPresetManager";

import type { Light, Room } from "./types";
import { roomsData } from "./data";
import { handleRoomTemperatureChange, handleRoomSelection } from "./handlers";

export default function HomePage() {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(roomsData[0]);
  const [selectedLight, setSelectedLight] = useState<Light | null>(null);

  const [rooms, setRooms] = useState<Room[]>([...roomsData]);

  const handleRoomTemperatureChangeBound = handleRoomTemperatureChange.bind(
    null,
    setRooms
  );

  const handleRoomSelectionBound = handleRoomSelection.bind(
    null,
    setSelectedRoom
  );

  return (
    <div className="flex flex-col">
      <NavBar currentTime="09:41 AM" />
      <div className="max-w-6xl mx-auto">
        {/* Container for central content */}
        <GreetingCard
          greeting="Good Morning, Jayden"
          subtext="How would you like to start your day?"
        />
        <AuraPresetManager />
        <div className="ribbon flex flex-wrap items-start space-x-4 mt-2">
          {/* Container for mini cards */}
          <MiniCardRow />

          {/* Container for power consumption chart */}
          <div className="mt-4 flex-shrink-0">
            <PowerConsumptionChart week="Sat 9th - Fri 15th March" />
          </div>
          {/* Container for savings card */}
          <div className="flex-shrink-0">
            <SavingsCard
              title="Saved so far"
              value={2332}
              unit="kWj"
              money={220}
            />
          </div>
        </div>
        <div className="flex mt-6">
          <div className="room-selector-wrapper">
            <RoomSelector
              onRoomSelect={handleRoomSelectionBound}
              rooms={rooms}
              selectedRoom={selectedRoom}
            />
          </div>
          <AuraManagerButton />
        </div>
        <div className="flex mt-6">
          <div className="flex-1">
            {/* RoomCard */}
            {selectedRoom && (
              <RoomCard
                room={selectedRoom}
                onTemperatureChange={handleRoomTemperatureChangeBound}
              />
            )}
            <div className="mt-4">
              {selectedLight && selectedRoom && (
                <div className="mt-6">
                  <LightInfo
                    selectedLight={selectedLight}
                    selectedRoom={selectedRoom}
                    rooms={rooms}
                    setRooms={setRooms}
                  />
                </div>
              )}
            </div>
          </div>
          {selectedRoom && (
            <div className="flex-2 mb-40">
              <LightArray
                selectedRoom={selectedRoom}
                rooms={rooms}
                setRooms={setRooms}
                selectedLight={selectedLight}
                setSelectedLight={setSelectedLight}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
