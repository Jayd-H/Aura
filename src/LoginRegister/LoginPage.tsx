import React from "react";
import { InfoSection } from "./InfoSection";
import { LoginForm } from "./LoginForm";

export const LoginPage: React.FC = () => {
  return (
    <div className="login-page">
      <InfoSection />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
