import React from "react";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";

interface InputFieldProps {
  label: string;
  type: string;
  placeholder?: string;
  required?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  placeholder,
  required,
}) => {
  const icon =
    type === "email" ? (
      <EnvelopeIcon className="w-5 h-5 text-bblack" />
    ) : (
      <LockClosedIcon className="w-5 h-5 text-bblack " />
    );

  return (
    <div className="relative w-3/4 mb-4">
      <div className="bg-gradient-to-r from-bpink to-bpurple rounded-md p-1">
        <div className="flex items-center bg-bwhite rounded-md">
          <input
            type={type}
            placeholder=" "
            className="w-full px-4 py-2 rounded-md bg-bwhite font-montserrat text-base"
            required={required}
          />
          <span className="mr-4">{icon}</span>
        </div>
      </div>
      <label className="absolute top-0 -mt-2 left-4 bg-bwhite text-bblack text-sm font-montserrat font-semibold">
        {label}
      </label>
    </div>
  );
};
