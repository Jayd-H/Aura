import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="bg-bt-gradient text-bwhite py-2 px-4 rounded-lg font-montserrat text-lg font-semibold hover:bg-tb-gradient-blue w-3/4"
    >
      {text}
    </button>
  );
};
