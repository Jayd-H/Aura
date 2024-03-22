import { AuraPreset } from "./Gen/AuraPreset";

export default function HomePage() {
  return (
    <div className="min-h-screen flex">
      <div className="m-auto">
        <AuraPreset
          auraName="Focus Time"
          room="Office Space"
          time="2"
          hue="Cool"
          power={false}
          temperature="28"
          backgroundImage="../../public/AuraImages/focustime.png"
        />
      </div>
    </div>
  );
}
