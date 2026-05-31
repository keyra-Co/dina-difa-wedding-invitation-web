import { useState } from "react";
import { useMusicPlayer } from "./hooks/useMusicPlayer";

import Cover from "./components/Cover/Cover";
import Hero from "./components/Hero/Hero";
import LocationVinyl from "./components/LocationVinyl/LocationVinyl";
import Schedule from "./components/Schedule/Schedule";
import Countdown from "./components/Countdown/Countdown";
import AboutUs from "./components/AboutUs/AboutUs";
import RSVP from "./components/RSVP/RSVP";
import Verse from "./components/Verse/Verse";
import Gift from "./components/Gift/Gift";
import Closing from "./components/Closing/Closing";
import Credit from "./components/Credit/Credit";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const { toggle } = useMusicPlayer("/assets/audio/wedding-song.mp3");

  const handleToggle = () => {
    const next = !isPlaying;
    setIsPlaying(next);
    toggle(next);
  };

  return (
    <>
      {!isOpen && <Cover onOpen={() => setIsOpen(true)} />}

      {isOpen && (
        <>
          <div
            className="bg-checkered-wrapper"
            style={{
              backgroundImage:
                "url('/assets/images/backgrounds/bg-checkered.png')",
            }}
          >
            <Hero />
            <LocationVinyl isPlaying={isPlaying} onToggle={handleToggle} />
            <Schedule />
            <Countdown />
          </div>

          <div
            className="bg-polkadot-wrapper"
            style={{
              backgroundImage:
                "url('/assets/images/backgrounds/bg-polkadot.png')",
            }}
          >
            <AboutUs />
            <RSVP />
          </div>

          <div
            className="bg-plaid-wrapper"
            style={{
              backgroundImage: "url('/assets/images/backgrounds/bg-plaid.png')",
            }}
          >
            <Verse />
            <Gift />
            <Closing />
          </div>
          <Credit />
        </>
      )}
    </>
  );
}
