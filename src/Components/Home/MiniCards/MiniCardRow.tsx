import React from "react";
import {
  CalendarMonthOutlined,
  ElectricalServicesOutlined,
  AlarmOutlined,
  CloudOutlined,
} from "@mui/icons-material";
import MiniCard from "./MiniCard";

const MiniCardRow: React.FC = () => {
  return (
    <div className="grid md:grid-cols-4 grid-cols-2 gap-3 lg:grid-cols-2 md:max-w-none auto-rows-fr p-1">
      <MiniCard
        value="15"
        subheading="Friday"
        icon={<CalendarMonthOutlined className="text-md" />}
        additionalText="03"
      />
      <MiniCard
        value="9:41"
        subheading="AM"
        icon={<AlarmOutlined className="text-md" />}
      />
      <MiniCard
        value="31°"
        subheading="Raining"
        icon={<CloudOutlined className="text-md" />}
      />
      <MiniCard
        value="360"
        subheading="kW"
        icon={<ElectricalServicesOutlined className="text-md" />}
      />
    </div>
  );
};

export default MiniCardRow;
