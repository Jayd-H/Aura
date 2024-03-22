import React from "react";
import PowerMiniCard from "./PowerMiniCard";
import TemperatureMiniCard from "./DateMiniCard";
import TimeMiniCard from "./TimeMiniCard";
import WeatherMiniCard from "./WeatherMiniCard";
import DateMiniCard from "./DateMiniCard";

const InfoCardsRow: React.FC = () => {
  return (
    <div className="flex space-x-4">
      <DateMiniCard label="Date" value="15" unit="Friday" />
      <TimeMiniCard label="Time" value="9:41" unit="AM" />
      <WeatherMiniCard label="Weather" value="31°" unit="Raining" />
      <PowerMiniCard label="Power" value="360" unit="kW" />
    </div>
  );
};

export default InfoCardsRow;
