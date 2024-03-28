import React from "react";
import AuraPreset from "./AuraPreset";

const AuraPresetManager: React.FC = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 justify-items-center">
        {/* Aura Preset components */}
        <AuraPreset
          auraName="Focus Time"
          room="Office Space"
          time="2"
          hue="Cool"
          power={true}
          temperature="28"
          backgroundImage="../../AuraImages/focustime.png"
        />
        <AuraPreset
          auraName="Morning Wake"
          room="Bedroom"
          time="1"
          hue="Warm"
          power={false}
          temperature="30"
          backgroundImage="../../AuraImages/morningwake.png"
        />
        <AuraPreset
          auraName="Cozy Evening"
          room="Living Room"
          time="3"
          hue="Warm"
          power={false}
          temperature="33"
          backgroundImage="../../AuraImages/cozyevening.png"
        />
      </div>
    </div>
  );
};

export default AuraPresetManager;
