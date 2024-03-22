import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-tb-gradient text-bwhite py-2 px-4 rounded-md font-montserrat text-lg font-semibold hover:bg-lr-gradient w-3/4"
    >
      {text}
    </button>
  );
};
