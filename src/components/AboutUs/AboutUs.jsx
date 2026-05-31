import "./AboutUs.css";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function SlideInLeft({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ x: -60, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function SlotTitle({ delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="about-slot-wrapper" ref={ref}>
      <motion.span
        className="about-title"
        initial={{ y: "100%" }}
        animate={isInView ? { y: "0%" } : {}}
        transition={{ duration: 0.5, delay, ease: "easeOut" }}
      >
        Tentang Kami
      </motion.span>
    </div>
  );
}

function SlideUp({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ y: 40, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function AboutUs() {
  return (
    <div className="about-container">
      <img
        src="/assets/images/about/butterfly-green.png"
        alt=""
        className="about-butterfly"
      />

      <div className="about-layout">
        <div className="about-left">
          <SlideInLeft delay={0}>
            <img
              src="/assets/images/about/photo-about-1.png"
              alt="Dina & Difa"
              className="about-photo"
            />
          </SlideInLeft>
          <SlideInLeft delay={0.3}>
            <img
              src="/assets/images/about/photo-about-2.png"
              alt="Dina & Difa"
              className="about-photo"
            />
          </SlideInLeft>
        </div>

        <div className="about-right">
          <SlotTitle delay={0} />
          <SlideUp delay={0.2}>
            <p className="about-text">
              Tidak ada kisah yang selalu dramatis. Tidak ada pertemuan ala film
              romantis. Hanya dua manusia biasa yang dipertemukan pada waktu
              yang tepat.
            </p>
            <p className="about-text">
              Dari obrolan kecil, menjadi nyaman. Dari nyaman, menjadi rumah.
            </p>
            <p className="about-text">
              Dan setelah banyak doa, perjalanan, serta proses pendewasaan, kami
              memutuskan untuk melangkah menuju kisah selanjutnya: menjadi
              keluarga.
            </p>
          </SlideUp>
        </div>
      </div>
    </div>
  );
}
