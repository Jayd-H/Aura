import React from "react";
import { InputField } from "./InputField";
import { Button } from "./Button";
import { Divider } from "./Divider";

export const RegisterForm: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-montserrat">
      <div className="w-full max-w-md text-center">
        <h2 className="text-gradient text-3xl mb-2 font-semibold">
          Create Account
        </h2>
        <Divider />
        <p className="text-bblack text-lg mb-6 mr-20 ml-20">
          <i>Welcome to Aura! Let's get you started</i>
        </p>
        <div className="flex flex-col items-center w-full">
          <InputField label="Email" type="email" required />
          <InputField label="Password" type="password" required />
          <InputField label="Confirm Password" type="password" required />
          <div className="m-3">
            <p className="text-bblack text-xs">
              Emails must be valid, containing an ‘@’ symbol.
            </p>

            <p className="text-bblack text-xs mb-1">
              Passwords must be between 5-64 characters long.
            </p>
          </div>

          <p className="text-bblack text-xs mb-1">
            By login, you agree to our Terms & Conditions
          </p>
          <Button text="Login" />
        </div>
        <p className="text-bblack text-sm mt-6 font-semibold">
          Already have an account?{" "}
          <a href="/" className="text-bpurple hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};
