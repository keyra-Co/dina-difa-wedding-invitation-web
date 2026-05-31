import "./Verse.css";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function SlotWriteText({ text, delay = 0, className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(" ");

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} className="slot-write-wrapper">
          <motion.span
            className="slot-write-line"
            initial={{ y: "-100%", clipPath: "inset(0 100% 0 0)" }}
            animate={isInView ? { y: "0%", clipPath: "inset(0 0% 0 0)" } : {}}
            transition={{
              duration: 0.1,
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

export default function Verse() {
  return (
    <div className="verse-container">
      <div className="verse-inner">
        <img
          src="/assets/images/verse-gift/monogram-dd-oval.png"
          alt="DD"
          className="verse-monogram"
        />

        <div className="verse-frame-group">
          <img
            src="/assets/images/verse-gift/frame-green-lace-oval.png"
            alt=""
            className="verse-frame"
          />
          <div className="verse-content">
            <SlotWriteText
              className="verse-ayat"
              delay={0}
              text={
                '"And one of His signs is that He created for you spouses from among yourselves so that you may find comfort in them. And He has placed between you compassion and mercy. Surely in this are signs for people who reflect."'
              }
            />
            <SlotWriteText
              className="verse-ref"
              delay={0.6}
              text="Q.S Ar Rum : 21"
            />
          </div>
        </div>

        <img
          src="/assets/images/verse-gift/flower-sakura-cluster-left.png"
          alt=""
          className="verse-flower verse-flower-left"
        />

        <img
          src="/assets/images/verse-gift/flower-sakura-cluster-right.png"
          alt=""
          className="verse-flower verse-flower-right"
        />
      </div>
    </div>
  );
}
