import React from "react";
import { InputField } from "./InputField";
import { Button } from "./Button";

export const LoginForm: React.FC = () => {
  return (
    <form className="login-form">
      <h2>Welcome Back</h2>
      <p>Please sign in with your Aura account</p>
      <InputField label="Email" type="email" required />
      <InputField label="Password" type="password" required />
      <div className="form-footer">
        <label>
          <input type="checkbox" />
          Remember Me
        </label>
        <a href="#">Forgot Password?</a>
      </div>
      <Button text="Login" />
      <div className="register-link">
        Don't Have an account? <a href="#">Register</a>
      </div>
    </form>
  );
};
