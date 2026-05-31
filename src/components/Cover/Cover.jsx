import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./Cover.css";

function FlowerItem({ src, className, delay }) {
  return (
    <motion.img
      src={src}
      alt=""
      className={className}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    />
  );
}

export default function Cover({ onOpen }) {
  const [isClosing, setIsClosing] = useState(false);

  const handleOpen = () => {
    setIsClosing(true);
    setTimeout(() => {
      onOpen();
    }, 800);
  };

  return (
    <AnimatePresence>
      {!isClosing && (
        <motion.div
          className="cover-container"
          style={{
            backgroundImage:
              "url('/assets/images/cover/bg-cover-stripe-pink-green.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          exit={{ transform: "translateY(-100%)", opacity: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <div className="cover-center">
            <FlowerItem
              src="/assets/images/flowers/flower-tl-calla-bouquet.png"
              className="flower flower-tl"
              delay={0.1}
            />
            <FlowerItem
              src="/assets/images/flowers/flower-ml-calla-stem.png"
              className="flower flower-ml"
              delay={0.2}
            />
            <FlowerItem
              src="/assets/images/flowers/flower-bl-lily-pink-double.png"
              className="flower flower-bl"
              delay={0.3}
            />
            <FlowerItem
              src="/assets/images/flowers/flower-mr-calla-twin.png"
              className="flower flower-mr"
              delay={0.15}
            />
            <FlowerItem
              src="/assets/images/flowers/flower-br-lily-pink-single.png"
              className="flower flower-br"
              delay={0.25}
            />

            <motion.img
              src="/assets/images/cover/envelope-closed-wax-seal.png"
              alt="Wedding Envelope"
              className="envelope"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </div>

          <motion.button
            className="tap-to-open-btn"
            onClick={handleOpen}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            whileTap={{ scale: 0.95 }}
          >
            Tap to Open
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
