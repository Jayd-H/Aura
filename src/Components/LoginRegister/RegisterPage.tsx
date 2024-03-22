import React from "react";
import { InfoSection } from "./InfoSection";
import { RegisterForm } from "./RegisterForm";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex">
      <div className="flex-1 bg-aura-gradient">
        <InfoSection />
      </div>
      <div className="bg-bwhite pr-16 pl-16">
        <RegisterForm />
      </div>
    </div>
  );
}
