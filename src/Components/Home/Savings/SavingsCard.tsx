import React from "react";

import { WindPowerOutlined } from "@mui/icons-material";
import { CreditScoreOutlined } from "@mui/icons-material";
import { SavingsOutlined } from "@mui/icons-material";

import { motion } from "framer-motion";

interface SavingsCardProps {
  title: string;
  value: number;
  unit: string;
  money: number;
}

const SavingsCard: React.FC<SavingsCardProps> = ({
  title,
  value,
  unit,
  money,
}) => {
  return (
    <motion.div drag>
      <div className="savings-card flex-grow min-w-0 flex flex-col items-center font-montserrat text-bblack border-dashed border-2 border-bblack rounded-2xl p-2">
        <div className="flex items-center justify-center w-full mt-2">
          <WindPowerOutlined className="h-6 w-6 mr-2" />
          <p className="text-xl font-bold mt-1 font-comfortaa">
            {value} {unit}
          </p>
        </div>
        <p className="text-md -mt-1 italic">{title}</p>
        <CreditScoreOutlined className="h-12 w-12 mt-2" />
        <div className="flex items-center justify-center w-full mt-2 ">
          <SavingsOutlined className="h-6 w-6 mr-2" />
          <p className="text-xl font-bold font-comfortaa">~ £{money}</p>
        </div>
        <p className="text-md text-center italic">Saved so far</p>
      </div>
    </motion.div>
  );
};

export default SavingsCard;
