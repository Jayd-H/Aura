import React from "react";
import { CalendarMonthOutlined } from "@mui/icons-material";

type GreetingCardProps = {
  greeting: string;
  subtext: string;
};

export const GreetingCard: React.FC<GreetingCardProps> = ({
  greeting,
  subtext,
}) => {
  return (
    <div className="p-6 font-montserrat">
      <h1 className="text-3xl font-bold text-gradient pb-2 -ml-5 mb-2">
        {greeting}
      </h1>
      <p className="text-lg -ml-5 -mt-4">{subtext}</p>
    </div>
  );
};

export default GreetingCard;
