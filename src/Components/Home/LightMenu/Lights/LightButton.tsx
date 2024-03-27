import React from "react";

interface LightButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const LightButton: React.FC<LightButtonProps> = ({ onClick, children }) => {
  return (
    <button
      className="mt-1 w-32 py-1 -mb-1 bg-bwhite text-bblack rounded-lg font-bold border-bblack hover:bg-bblack hover:text-bwhite"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default LightButton;
