import React from "react";

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
  return (
    <div className="input-field">
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        type={type}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};
