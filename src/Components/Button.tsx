import React from "react";
import { motion, spring } from "framer-motion";

interface ButtonProps {
  text: string;
  navigateTo?: string;
  disabled?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  navigateTo,
  disabled,
  className,
}) => {
  const handleClick = () => {
    if (navigateTo && !disabled) {
      window.location.href = navigateTo;
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      disabled={disabled}
      whileHover={disabled ? {} : { scale: 1.05 }}
      whileTap={disabled ? {} : { scale: 0.9 }}
      transition={{ duration: 0.01 }}
      className={`${
        disabled
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-bt-gradient hover:bg-tb-gradient-blue"
      } text-bwhite py-2 px-4 rounded-lg font-montserrat text-lg font-semibold w-3/4 shadow-inner transition hover:shadow-lg duration-300 ease-in-out ${className}`}
    >
      {text}
    </motion.button>
  );
};

export default Button;
