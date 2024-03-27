import React from "react";
import { AlarmOutlined } from "@mui/icons-material";

import { motion } from "framer-motion";

type MiniInfoCardProps = {
  value: string;
  unit?: string;
};

const TimeMiniCard: React.FC<MiniInfoCardProps> = ({ value, unit }) => {
  return (
    <motion.div drag>
      <div className="mini-card flex-grow min-w-0 flex flex-col items-center font-montserrat text-bblack border-dashed border-2 border-bblack rounded-2xl p-2">
        <div className="w-full flex justify-between items-center">
          <AlarmOutlined className="text-md ml-1" />
        </div>
        <div className="flex items-center justify-center">
          <p className="text-xl font-bold font-comfortaa">{value}</p>
        </div>
        <p className="text-md font-semibold text-center mb-5 mx-10 italic">
          {unit}
        </p>
      </div>
    </motion.div>
  );
};

export default TimeMiniCard;
