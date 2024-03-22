import React from "react";
import { InputField } from "./InputField";
import { Button } from "./Button";
import { Divider } from "./Divider";

export const LoginForm: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-montserrat">
      <div className="w-full max-w-md text-center">
        <h2 className="text-gradient text-3xl mb-2 font-semibold">
          Welcome Back
        </h2>
        <Divider />
        <p className="text-bblack text-lg mb-6 mr-20 ml-20">
          <i>Please sign in with your Aura account</i>
        </p>
        <div className="flex flex-col items-center w-full">
          <InputField label="Email" type="email" required />
          <InputField label="Password" type="password" required />
          <div className="flex justify-between items-center mb-14 -mt-3 w-3/4">
            <label className="flex items-center text-bblack text-sm">
              <input type="checkbox" className="mr-1 form-checkbox bg-bwhite" />
              Remember Me
            </label>
            <a href="#" className="text-bpurple text-sm hover:underline">
              Forgot Password?
            </a>
          </div>
          <p className="text-bblack text-xs mb-1">
            By login, you agree to our Terms & Conditions
          </p>
          <Button text="Login" />
        </div>
        <p className="text-bblack text-sm mt-6 font-semibold">
          Don't have an account?{" "}
          <a href="register" className="text-bpurple hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};
