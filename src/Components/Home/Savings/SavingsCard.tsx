import React from "react";

import { WindPowerOutlined } from "@mui/icons-material";
import { CreditScoreOutlined } from "@mui/icons-material";
import { SavingsOutlined } from "@mui/icons-material";

import { motion } from "framer-motion";

interface SavingsCardProps {
  value: number;
  unit: string;
  money: number;
}

const SavingsCard: React.FC<SavingsCardProps> = ({ value, unit, money }) => {
  return (
    <motion.div drag className="flex-grow flex justify-center w-full lg:p-1">
      <div className="grid grid-cols-3 lg:grid-cols-1 xl:-mx-10 items-center text-center font-montserrat lg:border-2 text-bblack border-t-2 lg:rounded-2xl border-bblack border-dashed px-4">
        <div>
          <div className="flex items-center">
            <WindPowerOutlined className="h-6 w-6 mr-2" />
            <p className="md:text-lg text-md font-bold mt-1 font-comfortaa">
              {value} {unit}
            </p>
          </div>
          <p className="lg:text-md text-sm -mt-1 italic text-center">
            Saved so far
          </p>
        </div>
        <div>
          <CreditScoreOutlined className="h-12 w-12 mt-2" />
        </div>
        <div className="">
          <div className="flex ml-3">
            <SavingsOutlined className="h-6 w-6 mr-2" />
            <p className="md:text-lg text-md font-bold mt-1 font-comfortaa">
              ~ £{money}
            </p>
          </div>
          <p className="lg:text-md text-sm text-center -mt-1 italic">
            Saved so far
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default SavingsCard;
