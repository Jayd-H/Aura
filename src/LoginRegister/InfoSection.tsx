import React from "react";

export const InfoSection: React.FC = () => {
  return (
    <div className="info-section">
      <div className="flex items-center justify-center min-h-screen">
        <div className="font-montserrat font-semibold space-y-3 w-2/3">
          <div className="p-3">
            <h1 className="text-2xl">What is Aura?</h1>
            <p className="text-lg">
              Aura is a web-based system that allows you to remotely control
              your home heating and temperature. Aura also provides useful
              statistics on your home’s power consumption and lets you select
              pre-set heating/cooling profiles (“auras”) to optimise comfort and
              energy use.
            </p>
          </div>
          <div className="p-3">
            <h1 className="text-2xl">How do we keep Aura secure?</h1>
            <p className="text-lg">
              Aura uses industry-standard security measures to protect your
              data, including secure login protocols and encrypted data
              transmission.
            </p>
          </div>
          <div className="p-3">
            <h1 className="text-2xl">How do I create an Aura account?</h1>
            <p className="text-lg">
              You can create an Aura account today using this link, or by
              selecting “Don’t have an account? Register” below the login form.
              Clicking this wil take you to a registration page where you can
              enter your email address, create a password, and select devices
              for use with Aura
            </p>
          </div>
          <div className="p-3">
            <h1 className="text-2xl">What if I forget my password?</h1>
            <p className="text-lg">
              If you forget your account password you can click here, or select
              “Forgot password?” on our login form. Clicking this will take you
              to a recovery page where you can enter your email address, and
              request a password reset link to be sent to your inbox.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
