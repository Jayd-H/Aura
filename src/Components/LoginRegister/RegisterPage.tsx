import React from "react";
import { InfoSection } from "./InfoSection";
import { RegisterForm } from "./RegisterForm";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex overflow-y-hidden">
      <div className="w-full xl:grid xl:grid-cols-6">
        <div className="hidden xl:block xl:col-span-4 bg-aura-gradient">
          <InfoSection />
        </div>
        <div className="flex justify-center items-center xl:col-span-2">
          <div className="w-full max-w-md p-8 bg-bwhite">
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
}
