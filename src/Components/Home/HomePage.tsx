import React, { useState } from "react";

import AuraPreset from "./Gen/AuraPreset";
import NavBar from "./Gen/Navbar";
import GreetingCard from "./Gen/GreetingCard";
import MiniCardRow from "./MiniCards/MiniCardRow";
import PowerConsumptionChart from "./Savings/PowerConsumptionChart";
import SavingsCard from "./Savings/SavingsCard";
import RoomSelector from "./RoomSelectorRow/RoomSelector";
import AuraManagerButton from "./Gen/AuraManagerCard";
import RoomCard from "./LightMenu/RoomCard";
import LightArray from "./LightMenu/Lights/LightArray";

import type { Light, Room } from "./types";
import { roomsData } from "./data";
import {
  handleRoomTemperatureChange,
  handleRoomSelection,
  handleLightSelection,
} from "./handlers";

export default function HomePage() {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
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
  const handleLightSelectionBound = handleLightSelection.bind(
    null,
    setSelectedLight
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
        <div className="flex overflow-x-auto py-6 space-x-4">
          {/* Container for horizontal presets */}
          <AuraPreset
            auraName="Focus Time"
            room="Office Space"
            time="2"
            hue="Cool"
            power={true}
            temperature="28"
            backgroundImage="../../AuraImages/focustime.png"
          />
          <AuraPreset
            auraName="Morning Wake"
            room="Bedroom"
            time="1"
            hue="Warm"
            power={false}
            temperature="30"
            backgroundImage="../../AuraImages/morningwake.png"
          />
          <AuraPreset
            auraName="Cozy Evening"
            room="Living Room"
            time="3"
            hue="Warm"
            power={false}
            temperature="33"
            backgroundImage="../../AuraImages/cozyevening.png"
          />
        </div>
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
            <div className="mt-4 bg-bblack room-settings-container">
              {/* Additional div for future reference */}
            </div>
          </div>

          {/* LightArray */}
          {selectedRoom && (
            <div className="flex-2 mb-40">
              <LightArray
                selectedRoom={selectedRoom}
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
