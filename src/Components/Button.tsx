import React from "react";

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
    <button
      onClick={handleClick}
      disabled={disabled}
      className="bg-bt-gradient text-bwhite py-2 px-4 rounded-lg font-montserrat text-lg font-semibold hover:bg-tb-gradient-blue w-3/4 shadow-inner"
    >
      {text}
    </button>
  );
};

export default Button;
