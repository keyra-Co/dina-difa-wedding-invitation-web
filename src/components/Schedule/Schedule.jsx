import "./Schedule.css";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import VenueMap from "../VenueMap/VenueMap";

function SlotText({ text, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="slot-wrapper" ref={ref}>
      <motion.span
        className="slot-text"
        initial={{ y: "100%" }}
        animate={isInView ? { y: "0%" } : {}}
        transition={{ duration: 0.5, delay, ease: "easeOut" }}
      >
        {text}
      </motion.span>
    </div>
  );
}

export default function Schedule() {
  return (
    <div className="schedule-container">
      <div className="schedule-frame-group">
        <img
          src="/assets/images/schedule/frame-pink-square-lace.png"
          alt=""
          className="schedule-frame"
        />

        <div className="schedule-content">
          <p className="schedule-label">Akad</p>
          <SlotText text="9.30 - 11.00 WIB" delay={0} />

          <p className="schedule-label">Resepsi</p>
          <SlotText text="11.00 - 13.30 WIB" delay={0.1} />

          <img
            src="/assets/images/schedule/icon-building-venue.png"
            alt=""
            className="schedule-icon-venue"
          />

          <SlotText text="Terrace Rafi El (The Cakung House)" delay={0.2} />

          <SlotText
            text="Jl. Raya Kayu Tinggi No.13 1, RT.1/RW.6, Cakung Tim., Kec. Cakung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13910"
            delay={0.3}
          />
        </div>

        <img
          src="/assets/images/schedule/flower-orchid-white-cluster.png"
          alt=""
          className="schedule-flower"
        />
      </div>
      <VenueMap />
    </div>
  );
}
