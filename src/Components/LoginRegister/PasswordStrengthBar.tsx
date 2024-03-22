import React from "react";

export const PasswordStrengthBar: React.FC<{
  password: string;
  strengthCalculator: (password: string) => number;
}> = ({ password, strengthCalculator }) => {
  const strength = strengthCalculator(password);

  return (
    <div className="relative w-2/3 mt-4">
      <label className="text-bblack text-sm font-montserrat font-semibold">
        Password Strength
      </label>
      <div className={`bg-tb-gradient rounded-md p-1/2`}>
        <div className="flex items-center bg-bwhite rounded-md">
          <div className="w-full rounded-md font-montserrat text-base">
            <div className="h-3 rounded-full">
              <div
                className="h-full bg-rl-gradient-blue rounded-full"
                style={{ width: `${strength}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
