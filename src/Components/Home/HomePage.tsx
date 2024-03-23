import AuraPreset from "./Gen/AuraPreset";
import NavBar from "./Gen/Navbar";
import GreetingCard from "./Gen/GreetingCard";
import MiniCardRow from "./MiniCards/MiniCardRow";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <NavBar currentTime="09:41 AM" />
      <div className="max-w-6xl mx-auto">
        {/* Container for central content */}
        <GreetingCard
          greeting="Good Morning, Jayden"
          subtext="How would you like to start your day?"
        />
        <div className="flex overflow-x-auto py-2 space-x-4">
          {/* Container for horizontal presets */}
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
        <div>
          {/* Container for mini cards */}
          <div className="flex">
            <MiniCardRow />
          </div>
        </div>
      </div>
    </div>
  );
}
