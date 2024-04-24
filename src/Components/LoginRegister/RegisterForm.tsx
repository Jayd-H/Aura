import React, { useState, useEffect, useRef } from "react";
import { InputField } from "./InputField";
import { Button } from "../Button";
import { Divider } from "./Divider";
import { PasswordStrengthBar } from "./PasswordStrengthBar";

const calculateStrength = (password: string) => {
  const length = password.length;
  let meter = 0;
  if (length === 0) return 0;
  meter = (length / 20) * 100;
  if (meter > 100) return 100;
  return meter;
};

export const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const emailInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const isMatch = password === confirmPassword;
    const isValidLength =
      email.length >= 5 && password.length >= 5 && confirmPassword.length >= 5;
    const strength = calculateStrength(password);

    if (strength < 33.33) {
      setErrorMessage("Password is too weak!");
    } else if (!isMatch) {
      setErrorMessage("Passwords do not match!");
    } else {
      setErrorMessage("");
    }

    setIsButtonDisabled(!(isMatch && isValidLength && strength >= 33.33));
  }, [email, password, confirmPassword]);

  useEffect(() => {
    emailInputRef.current?.focus();
  }, []);

  const handlePasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    isConfirm: boolean
  ) => {
    const newValue = e.target.value;
    if (isConfirm) {
      setConfirmPassword(newValue);
    } else {
      setPassword(newValue);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-montserrat">
      <div className="w-full max-w-md text-center">
        <h2 className="text-gradient text-3xl mb-1 font-semibold font-comfortaa">
          Create Account
        </h2>
        <Divider />
        <p className="text-bblack text-lg mb-6 mr-20 ml-20">
          <i>Welcome to Aura! Let's get you started</i>
        </p>
        <div className="flex flex-col items-center w-full">
          <InputField
            label="Email"
            type="email"
            required
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            ref={emailInputRef}
          />
          <InputField
            label="Password"
            type="password"
            required
            value={password}
            placeholder="Password"
            onChange={(e) => handlePasswordChange(e, false)}
          />
          <InputField
            label="Confirm Password"
            type="password"
            required
            value={confirmPassword}
            placeholder="Confirm Password"
            onChange={(e) => handlePasswordChange(e, true)}
          />
          <PasswordStrengthBar
            password={password}
            strengthCalculator={calculateStrength}
          />
          <div
            className={`text-red-500 text-sm font-semibold italic mt-1 ${
              errorMessage ? "" : "opacity-0"
            }`}
            style={{ minHeight: "20px" }}
          >
            {errorMessage || " "}
          </div>

          <div className="mt-2">
            <p className="text-bblack text-xs">
              Emails must be valid, containing an '@' symbol.
            </p>

            <p className="text-bblack text-xs -mt-1">
              Passwords must be between 5-64 characters long.
            </p>
          </div>

          <p className="text-bblack text-xs mb-1 mt-1">
            By login, you agree to our Terms & Conditions
          </p>
          <Button
            text="Register"
            navigateTo="/home"
            disabled={isButtonDisabled}
          />
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
