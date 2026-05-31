import "./Gift.css";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function SlotWriteText({ text, delay = 0, className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(" ");

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} className="gift-slot-wrapper">
          <motion.span
            className="gift-slot-line"
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

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button className="gift-copy-btn" onClick={handleCopy}>
      {copied ? "✓ Disalin!" : "Salin"}
    </button>
  );
}

export default function Gift() {
  return (
    <div className="gift-container">
      <div className="gift-frame-group">
        <img
          src="/assets/images/verse-gift/frame-green-ornate.png"
          alt=""
          className="gift-frame"
        />

        <div className="gift-content">
          <div className="gift-title-row">
            <span className="gift-title">Wedding Gift</span>
            <img
              src="/assets/images/verse-gift/icon-gift.png"
              alt=""
              className="gift-icon"
            />
          </div>

          <SlotWriteText
            text="Doa restu Anda adalah hadiah terindah bagi kami. Namun jika memberi adalah bentuk kasih sayang, kami telah menyediakan fitur berikut."
            delay={0}
            className="gift-disclaimer"
          />

          <div className="gift-rekening">
            <div className="gift-info">
              <p className="gift-bank">BCA 7420437204</p>
              <CopyButton text="7420437204" />
            </div>
            <p className="gift-atas-nama">atas nama Achmad Difa Afandi</p>
          </div>

          <div className="gift-rekening">
            <div className="gift-info">
              <p className="gift-bank">BCA 6240883064</p>
              <CopyButton text="6240883064" />
            </div>
            <p className="gift-atas-nama">atas nama Dina Ameliani</p>
          </div>
        </div>
      </div>

      <img
        src="/assets/images/verse-gift/icon-dove-rings.png"
        alt=""
        className="gift-dove"
      />
    </div>
  );
}
