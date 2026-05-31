import "./Closing.css";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function SlotWriteText({ text, delay = 0, className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(" ");

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} className="closing-slot-wrapper">
          <motion.span
            className="closing-slot-line"
            initial={{ y: "-100%", clipPath: "inset(0 100% 0 0)" }}
            animate={isInView ? { y: "0%", clipPath: "inset(0 0% 0 0)" } : {}}
            transition={{
              duration: 0.5,
              delay: delay + i * 0.05,
              ease: "easeOut",
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </p>
  );
}

export default function Closing() {
  return (
    <div className="closing-container">
      <SlotWriteText
        text="Doakan kami, agar cinta yang kami rajut hari ini tidak berhenti sebagai kisah yang indah semata, tetapi menjadi perjalanan panjang yang saling menuntun, menguatkan dan mengiringi langkah kami menuju ridha serta surga-Nya."
        delay={0}
        className="closing-doa"
      />

      <p className="closing-names">Dina & Difa</p>
      <p className="closing-see-you">See you on our special day ♡</p>
      <p className="closing-hashtag">#DiFallinLoveWithDina</p>
    </div>
  );
}
