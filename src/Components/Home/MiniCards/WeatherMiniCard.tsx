import React from "react";
import { CloudOutlined } from "@mui/icons-material";

type MiniInfoCardProps = {
  value: string;
  unit?: string;
};

const WeatherMiniCard: React.FC<MiniInfoCardProps> = ({ value, unit }) => {
  return (
    <div className="mini-card flex-grow min-w-0 flex flex-col items-center font-montserrat text-bblack border-dashed border-2 border-bblack rounded-2xl p-2">
      <div className="w-full flex justify-between items-center">
        <CloudOutlined className="text-md ml-1" />
      </div>
      <div className="flex items-center justify-center">
        <p className="text-2xl font-bold mt-1">{value}°</p>
      </div>
      <p className="text-lg font-semibold text-center mb-5 mx-12">{unit}</p>
    </div>
  );
};

export default WeatherMiniCard;
