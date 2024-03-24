import React from "react";
import { CalendarMonthOutlined } from "@mui/icons-material";

type MiniInfoCardProps = {
  value: string;
  month: string;
  day: string;
  unit?: string;
};

const DateMiniCard: React.FC<MiniInfoCardProps> = ({
  value,
  month,
  day,
  unit,
}) => {
  return (
    <div className="mini-card flex-grow min-w-0 flex flex-col items-center font-montserrat text-bblack border-dashed border-2 border-bblack rounded-2xl p-2">
      <div className="w-full flex justify-between items-center">
        <CalendarMonthOutlined className="text-md ml-1 -mt-1" />
        <span className="text-md font-semibold mr-1 ">{month}</span>
      </div>
      <div className="flex items-center justify-center">
        <p className="text-xl font-bold -mt-2">{day}</p>
      </div>
      <p className="text-md font-semibold text-center mb-5 mx-10">{value}</p>
    </div>
  );
};

export default DateMiniCard;
