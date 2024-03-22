import React, { useState, useEffect } from "react";
import { InputField } from "./InputField";
import { Button } from "../Button";
import { Divider } from "./Divider";
import { PasswordStrengthBar } from "./PasswordStrengthBar";

const calculateStrength = (password: string) => {
  const length = password.length;
  let meter = 0;
  if (length === 0) return 0;
  meter = length * 6;
  if (meter > 100) {
    meter = 100;
  }
  return meter;
};

export const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    const isMatch = password === confirmPassword;
    const isValidLength =
      email.length >= 5 && password.length >= 5 && confirmPassword.length >= 5;
    const strength = calculateStrength(password);

    setPasswordError(isMatch ? "" : "Passwords do not match!");
    setIsButtonDisabled(!(isMatch && isValidLength && strength >= 50));
  }, [email, password, confirmPassword]);

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
          <div
            className={`text-red-500 text-sm font-semibold italic mt-1 ${
              passwordError ? "" : "opacity-0"
            }`}
            style={{ minHeight: "20px" }}
          >
            {passwordError || " "}
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
