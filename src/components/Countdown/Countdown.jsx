import "./Countdown.css";
import { useCountdown } from "../../hooks/useCountdown";

function DigitBlock({ value, label }) {
  const digits = String(value).padStart(2, "0").split("");

  return (
    <div className="cd-block">
      <div className="cd-digits">
        {digits.map((digit, i) => (
          <div className="cd-digit-wrapper" key={i}>
            <span className="cd-digit">{digit}</span>
          </div>
        ))}
      </div>
      <span className="cd-label">{label}</span>
    </div>
  );
}

export default function Countdown() {
  const { hari, jam, menit, detik } = useCountdown();

  return (
    <div className="cd-container">
      <h2 className="cd-title">Counting Days</h2>
      <p className="cd-subtitle">
        Menuju hari di mana
        <br />
        dua cerita akan menjadi satu rumah.
      </p>
      <div className="cd-timer">
        <DigitBlock value={hari} label="HARI" />
        <span className="cd-separator">:</span>
        <DigitBlock value={jam} label="JAM" />
        <span className="cd-separator">:</span>
        <DigitBlock value={menit} label="MNT" />
        <span className="cd-separator">:</span>
        <DigitBlock value={detik} label="DTK" />
      </div>
    </div>
  );
}
