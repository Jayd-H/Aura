import React from "react";
import { motion, spring } from "framer-motion";

interface ButtonProps {
  text: string;
  navigateTo?: string;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  navigateTo,
  disabled,
}) => {
  const handleClick = () => {
    if (navigateTo) {
      window.location.href = navigateTo;
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      disabled={disabled}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.01 }}
      className="bg-bt-gradient text-bwhite py-2 px-4 rounded-lg font-montserrat text-lg font-semibold hover:bg-tb-gradient-blue w-3/4 shadow-inner transition duration-300 ease-in-out"
    >
      {text}
    </motion.button>
  );
};

export default Button;
