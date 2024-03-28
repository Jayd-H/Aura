import React from "react";
import { motion } from "framer-motion";

type MiniCardProps = {
  value: string;
  subheading: string;
  icon: React.ReactNode;
  additionalText?: string;
};

const MiniCard: React.FC<MiniCardProps> = ({
  value,
  subheading,
  icon,
  additionalText,
}) => {
  return (
    <motion.div drag className="w-full h-full">
      <div className="relative font-montserrat text-bblack border-dashed border-2 my-4 lg:my-0 border-bblack rounded-2xl p-2 h-full">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">{icon}</div>
          {additionalText && (
            <span className="text-md font-semibold">{additionalText}</span>
          )}
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <p className="text-xl font-bold font-comfortaa text-center">
            {value}
          </p>
          <p className="text-md font-semibold text-center italic">
            {subheading}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default MiniCard;
