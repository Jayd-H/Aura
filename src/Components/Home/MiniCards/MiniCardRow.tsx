import React from "react";
import PowerMiniCard from "./PowerMiniCard";
import TimeMiniCard from "./TimeMiniCard";
import WeatherMiniCard from "./WeatherMiniCard";
import DateMiniCard from "./DateMiniCard";

const MiniCardRow: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4 max-w-none">
      <DateMiniCard value="Friday" month="03" day="15" />
      <TimeMiniCard value="9:41" unit="AM" />
      <WeatherMiniCard value="31" unit="Raining" />
      <PowerMiniCard value="360" unit="kW" />
    </div>
  );
};

export default MiniCardRow;
