import React from "react";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
  text: string;
  navigateTo?: string;
}

export const Button: React.FC<ButtonProps> = ({ text, navigateTo }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (navigateTo) navigate(navigateTo);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-bt-gradient text-bwhite py-2 px-4 rounded-lg font-montserrat text-lg font-semibold hover:bg-tb-gradient-blue w-3/4 shadow-inner"
    >
      {text}
    </button>
  );
};

export default Button;
