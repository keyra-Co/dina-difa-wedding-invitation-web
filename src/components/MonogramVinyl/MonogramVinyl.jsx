import "./MonogramVinyl.css";
import { useRef, useEffect, useState } from "react";

export default function MonogramVinyl({ isPlaying, onToggle }) {
  return (
    <div className="mv-container">
      <div className="mv-monogram-group">
        <img
          src="/assets/images/monogram-vinyl/frame-circle-serrated-pink.png"
          alt="Logo"
          className="mv-monogram-frame"
        />
        <img
          src="/assets/images/monogram-vinyl/monogram-dd.png"
          alt="Logo"
          className="mv-monogram-dd"
        />
      </div>

      <div className="mv-vinyl-group">
        <img
          src="/assets/images/monogram-vinyl/flower-ranunculus-pink-stem.png"
          alt=""
          className="mv-flower mv-flower-top"
        />
        <img
          src="/assets/images/monogram-vinyl/flower-sakura-cluster-pink.png"
          alt=""
          className="mv-flower mv-flower-bottom"
        />

        <div className="mv-vinyl-wrapper" onClick={onToggle}>
          <img
            src="/assets/images/monogram-vinyl/vinyl-record-black.png"
            alt="Music Player"
            className={`mv-vinyl ${isPlaying ? "mv-vinyl-spinning" : ""}`}
          />
          <svg
            className="mv-vinyl-text-svg"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <path id="curve" d="M 15,50 A 35,35 0 1,1 85,50" />
            </defs>
            <text className="mv-curved-text">
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
