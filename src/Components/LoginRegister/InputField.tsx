import React, { useState } from "react";
import {
  EnvelopeIcon,
  LockClosedIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";

interface InputFieldProps {
  label: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const focusStyle = `
  focus:ring-0
  focus:border-0
  focus:outline-none
`;

export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, type, placeholder, required, value, onChange }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword((prevState) => !prevState);
    };

    const icon =
      type === "email" ? (
        <EnvelopeIcon className="w-5 h-5 text-bblack" />
      ) : (
        <LockClosedIcon className="w-5 h-5 text-bblack" />
      );

    const passwordIcon = showPassword ? (
      <EyeSlashIcon
        className="w-5 h-5 text-bblack cursor-pointer"
        onClick={togglePasswordVisibility}
      />
    ) : (
      <EyeIcon
        className="w-5 h-5 text-bblack cursor-pointer"
        onClick={togglePasswordVisibility}
      />
    );

    return (
      <div className="relative w-3/4 mb-4 mt-6">
        <div
          className={`bg-lr-gradient rounded-md p-1/2 hover:bg-lr-gradient-blue ${focusStyle}`}
        >
          <div className="flex items-center bg-white rounded-md">
            <input
              type={showPassword ? "text" : type}
              placeholder={placeholder}
              className={`w-full px-4 py-2 rounded-md bg-white font-montserrat text-base ${focusStyle}`}
              required={required}
              value={value}
              onChange={onChange}
              ref={ref}
            />
            <span className="mr-4">
              {type === "password" ? passwordIcon : icon}
            </span>
          </div>
        </div>
        <label className="absolute top-0 -mt-4 left-2 bg-bwhite border-b-2 border-bblack px-1 border-dashed text-bblack text-sm font-montserrat font-semibold">
          {label}
        </label>
      </div>
    );
  }
);
