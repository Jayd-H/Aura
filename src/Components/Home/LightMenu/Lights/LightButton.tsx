import React from "react";
import { motion } from "framer-motion";

interface LightButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const LightButton: React.FC<LightButtonProps> = ({ onClick, children }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="relative inline-block mt-1 w-32 py-1 -mb-1 rounded-lg font-bold group"
    >
      <span className="relative z-10 block px-5 py-2 overflow-hidden font-medium leading-tight text-bblack transition-colors duration-300 ease-out border-bblack rounded-lg group-hover:text-bwhite">
        <span className="absolute inset-0 w-full h-full px-5 py-2 rounded-lg bg-bwhite"></span>
        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-bblack group-hover:-rotate-180 ease"></span>
        <span className="relative">{children}</span>
      </span>
    </motion.button>
  );
};

export default LightButton;
