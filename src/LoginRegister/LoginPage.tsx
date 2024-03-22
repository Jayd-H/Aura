import React from "react";
import { InfoSection } from "./InfoSection";
import { LoginForm } from "./LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      <div className="flex-1 bg-aura-gradient">
        <InfoSection />
      </div>
      <div className="bg-bwhite pr-16 pl-16">
        <LoginForm />
      </div>
    </div>
  );
}
