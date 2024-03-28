import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import NavBar from "./Gen/Navbar";
import GreetingCard from "./Gen/GreetingCard";
import MiniCardRow from "./MiniCards/MiniCardRow";
import PowerConsumptionChart from "./Savings/PowerConsumptionChart";
import SavingsCard from "./Savings/SavingsCard";
import RoomSelector from "./RoomSelectorRow/RoomSelector";
import RoomSelectorPlus from "./RoomSelectorRow/RoomSelectorPlus";
import AuraManagerButton from "./AuraPreset/AuraManagerButton";
import RoomCard from "./LightMenu/RoomCard";
import LightArray from "./LightMenu/Lights/LightArray";
import LightInfo from "./LightMenu/LightInfo";
import AuraPresetManager from "./AuraPreset/AuraPresetManager";
import LoadingScreen from "./LoadingScreen";

import type { Light, Room } from "./types";
import { roomsData } from "./data";
import { handleRoomTemperatureChange, handleRoomSelection } from "./handlers";

export default function HomePage2() {
  const [isLoading, setIsLoading] = useState(true);
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div
          key="loading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <LoadingScreen />
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <NavBar currentTime="09:41 AM" />
          <div className="container mx-auto py-2 2xl:px-72 lg:px-10 md:px-32 px-2">
            <motion.div variants={childVariants} className="mb-4">
              {/* Greeting*/}
              <GreetingCard
                greeting="Good Morning Jayden"
                subtext="How would you like to start your day?"
              />
            </motion.div>
            <motion.div variants={childVariants}>
              {/* Aura Presets*/}
              <AuraPresetManager />
            </motion.div>
            <motion.div variants={childVariants} className="ribbon">
              <div className="container mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
                  {/* Mini Card Row */}
                  <div className="grid col-span-2 -mt-4 lg:-mt-0">
                    <MiniCardRow />
                  </div>
                  {/* Power Consumption Chart */}
                  <div className="grid lg:col-span-3 col-span-2">
                    <PowerConsumptionChart week="Sat 9th - Fri 15th March" />
                  </div>
                  {/* Savings Card */}
                  <div className="grid lg:col-span-1 col-span-2">
                    <SavingsCard value={2332} unit="kWj" money={220} />
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div variants={childVariants} className="container mt-6">
              <div className="grid lg:grid-cols-12 grid-cols-1">
                {/* Room Selector*/}
                <div className="grid lg:col-span-8 lg:-mr-6">
                  <RoomSelector
                    rooms={rooms}
                    selectedRoom={selectedRoom}
                    onRoomSelect={handleRoomSelectionBound}
                  />
                </div>
                {/* Add Room Button */}
                <div className="grid lg:col-span-1 justify-center items-center lg:mt-0 mt-1 lg:mb-0 mb-4">
                  <RoomSelectorPlus />
                </div>
                {/* Aura Manager Button */}
                <div className="grid lg:col-span-3 lg:-ml-2">
                  <AuraManagerButton />
                </div>
              </div>
            </motion.div>
            <motion.div variants={childVariants} className="container mt-8">
              <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                {/* Room Card and Light Info */}
                <div className="grid lg:col-span-1">
                  {/* Room Card */}
                  <div className="grid lg:auto-rows-max">
                    {selectedRoom && (
                      <RoomCard
                        room={selectedRoom}
                        onTemperatureChange={handleRoomTemperatureChangeBound}
                      />
                    )}
                    {/* Light Info */}
                    {selectedRoom && (
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
                {/* Light Array */}
                <div className="grid lg:col-span-2">
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
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
