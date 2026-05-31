import "./LocationVinyl.css";
import { useRef, useEffect, useState } from "react";

export default function LocationVinyl({ isPlaying, onToggle }) {
  return (
    <div className="lv-container">
      <a
        href="https://www.google.com/maps?q=TERACCE+RAFI+EL,+Jl.+Raya+Kayu+Tinggi+No.13+1,+RT.1/RW.6,+Cakung+Tim.,+Kec.+Cakung,+Kota+Jakarta+Timur,+Daerah+Khusus+Ibukota+Jakarta+13910&ftid=0x2e698b0079deec3b:0x997563cecf471358"
        target="_blank"
        rel="noopener noreferrer"
        className="lv-lokasi-link"
      >
        <img
          src="/assets/images/location-vinyl/frame-circle-serrated-pink.png"
          alt="Lokasi"
          className="lv-lokasi-frame"
        />
        <div className="lv-lokasi-text">
          <span className="lv-lokasi-title">Lokasi</span>
          <span className="lv-lokasi-subtitle">Maps Klik Disini</span>
        </div>
      </a>

      <div className="lv-vinyl-group">
        <img
          src="/assets/images/location-vinyl/flower-ranunculus-pink-stem.png"
          alt=""
          className="lv-flower lv-flower-top"
        />
        <img
          src="/assets/images/location-vinyl/flower-sakura-cluster-pink.png"
          alt=""
          className="lv-flower lv-flower-bottom"
        />

        <div className="lv-vinyl-wrapper" onClick={onToggle}>
          <img
            src="/assets/images/location-vinyl/vinyl-record-black.png"
            alt="Music Player"
            className={`lv-vinyl ${isPlaying ? "lv-vinyl-spinning" : ""}`}
          />
          <svg
            className="lv-vinyl-text-svg"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <path id="curve" d="M 15,50 A 35,35 0 1,1 85,50" />
            </defs>
            <text className="lv-curved-text">
              <textPath href="#curve" startOffset="10%">
                {isPlaying ? "Tap to pause music" : "Tap to play music"}
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}
