import React from "react";
import { ElectricalServicesOutlined } from "@mui/icons-material";

type MiniInfoCardProps = {
  label: string;
  value: string;
  unit?: string;
};

const DateMiniCard: React.FC<MiniInfoCardProps> = ({ label, value, unit }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md flex items-center">
      <ElectricalServicesOutlined className="text-gray-500 text-xl" />
      <div className="ml-2">
        <p className="text-sm font-semibold">{label}</p>
        <p className="text-lg">
          {value}
          {unit}
        </p>
      </div>
    </div>
  );
};

export default DateMiniCard;
