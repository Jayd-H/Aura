import React from "react";
import { motion } from "framer-motion";

export const PasswordStrengthBar: React.FC<{
  password: string;
  strengthCalculator: (password: string) => number;
}> = ({ password, strengthCalculator }) => {
  const strength = strengthCalculator(password);

  const barVariants = {
    hidden: { width: "0%" },
    visible: { width: `${strength}%` },
  };

  return (
    <div className="relative w-2/3 mt-4">
      <label className="text-bblack text-sm font-montserrat font-semibold">
        Password Strength
      </label>
      <div className="bg-lr-gradient rounded-md p-1/2">
        <div className="flex items-center bg-bwhite rounded-sm">
          <div className="w-full rounded-md font-montserrat text-base">
            <div className="h-3 rounded-full">
              <motion.div
                className="h-full bg-lr-gradient rounded-sm"
                initial="hidden"
                animate="visible"
                variants={barVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
              ></motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
