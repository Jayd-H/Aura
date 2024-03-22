import React, { useState } from "react";
import { InputField } from "./InputField";
import { Button } from "./Button";
import { Divider } from "./Divider";
import { PasswordStrengthBar } from "./PasswordStrengthBar";

const calculateStrength = (password: string) => {
  const length = password.length;
  console.log("Length: ", length);
  if (length === 0) return 0;
  if (length < 6) return 25;
  if (length < 10) return 50;
  if (length < 14) return 75;
  return 100;
};

export const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const isFormValid = () => {
    const strength = calculateStrength(password);
    return (
      console.log("Email: ", email),
      console.log("Password: ", password),
      console.log("Confirm Password: ", confirmPassword),
      console.log("Strength: ", strength),
      email.length > 0 &&
        password.length > 0 &&
        confirmPassword.length > 0 &&
        password === confirmPassword &&
        strength >= 50
    );
  };

  const checkPasswordMatch = () => {
    if (password !== confirmPassword) {
      console.log("Passwords do not match!");
      setPasswordError("Passwords do not match!");
    } else {
      console.log("Passwords match!");
      setPasswordError("");
    }
  };

  const handlePasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    isConfirm: boolean
  ) => {
    const newValue = e.target.value;
    if (isConfirm) {
      console.log("Confirm Password: ", newValue);
      setConfirmPassword(newValue);
      checkPasswordMatch();
    } else {
      console.log("else: ", newValue);
      setPassword(newValue);
      checkPasswordMatch();
    }
  };

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
          <InputField
            label="Email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            label="Password"
            type="password"
            required
            value={password}
            onChange={(e) => handlePasswordChange(e, false)}
          />
          <InputField
            label="Confirm Password"
            type="password"
            required
            value={confirmPassword}
            onChange={(e) => handlePasswordChange(e, true)}
          />
          <PasswordStrengthBar
            password={password}
            strengthCalculator={calculateStrength}
          />
          {passwordError && (
            <p className="text-red-500 text-xs italic">{passwordError}</p>
          )}
          <div className="mt-2">
            <p className="text-bblack text-xs">
              Emails must be valid, containing an ‘@’ symbol.
            </p>

            <p className="text-bblack text-xs -mt-1">
              Passwords must be between 5-64 characters long.
            </p>
          </div>

          <p className="text-bblack text-xs mb-1 mt-10">
            By login, you agree to our Terms & Conditions
          </p>
          <Button text="Register" disabled={!isFormValid()} />
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
