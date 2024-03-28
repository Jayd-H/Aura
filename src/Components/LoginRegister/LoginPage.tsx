import React from "react";
import { InfoSection } from "./InfoSection";
import { LoginForm } from "./LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex overflow-y-hidden">
      <div className="w-full xl:grid xl:grid-cols-6">
        <div className="hidden xl:block xl:col-span-4 bg-aura-gradient">
          <InfoSection />
        </div>
        <div className="flex justify-center items-center xl:col-span-2">
          <div className="w-full max-w-md p-8 bg-bwhite">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}
