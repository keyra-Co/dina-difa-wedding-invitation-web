import "./Hero.css";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

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

function SlideX({ children, direction = "left", delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ x: direction === "left" ? -40 : 40, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function WritingText({ text, className, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ clipPath: "inset(0 100% 0 0)" }}
      animate={isInView ? { clipPath: "inset(0 0% 0 0)" } : {}}
      transition={{ duration: 1.2, delay, ease: "easeOut" }}
    >
      {text}
    </motion.span>
  );
}

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

export default function Hero() {
  return (
    <div
      className="hero-container"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      <div className="hero-layout">
        <div className="hero-left">
          <div className="envelope-group">
            <FlowerItem
              src="/assets/images/flowers/flower-tl-calla-bouquet.png"
              className="flower hero-flower-tl"
              delay={0.1}
            />
            <FlowerItem
              src="/assets/images/flowers/flower-mr-calla-twin.png"
              className="flower hero-flower-ml"
            />
            <FlowerItem
              src="/assets/images/flowers/flower-bl-lily-pink-double.png"
              className="flower hero-flower-bl"
              delay={0.1}
            />
            <FlowerItem
              src="/assets/images/flowers/flower-mr-calla-twin.png"
              className="flower hero-flower-mr"
              delay={0.15}
            />
            <FlowerItem
              src="/assets/images/flowers/flower-br-lily-pink-single.png"
              className="flower hero-flower-br"
              delay={0.15}
            />
            <img
              src="/assets/images/hero/envelope-open.png"
              alt="Open Envelope"
              className="envelope-open"
            />
            <div></div>
            <motion.img
              src="/assets/images/hero/paper-green-heart.png"
              alt=""
              className="paper-green-heart"
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
            <div className="youre-invited">
              <motion.span
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              >
                You're
              </motion.span>
              <motion.span
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.55, ease: "easeOut" }}
              >
                Invited
              </motion.span>
            </div>
          </div>

          <div className="savethedate-group">
            <img
              src="/assets/images/hero/card-savethedate-wax-seal.png"
              alt=""
              className="card-savethedate"
            />
            <WritingText
              text="Save the Date"
              className="savethedate-text"
              delay={0.3}
            />
          </div>

          <div className="frame-rect-group">
            <img
              src="/assets/images/hero/frame-green-rectangle-lace.png"
              alt=""
              className="frame-green-rect"
            />
            <div className="frame-rect-content">
              <SlideUp delay={0}>
                <p className="text-the-wedding-of">the wedding of</p>
              </SlideUp>
              <SlideX direction="left" delay={0.2}>
                <p className="text-name">Dina Ameliani</p>
              </SlideX>
              <SlideX direction="right" delay={0.4}>
                <p className="text-ampersand">&</p>
              </SlideX>
              <SlideX direction="left" delay={0.6}>
                <p className="text-name">Achmad Difa Afandi</p>
              </SlideX>
              <SlideUp delay={0.8}>
                <p className="text-day">Minggu</p>
                <p className="text-date">07.06.2026</p>
              </SlideUp>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="photo-strip">
            <div className="photo-frame">
              <img
                src="/assets/images/hero/photo-couple-1.png"
                alt="Dina & Difa"
              />
            </div>
            <div className="photo-frame">
              <img
                src="/assets/images/hero/photo-couple-2.png"
                alt="Dina & Difa"
              />
            </div>
            <div className="photo-frame">
              <img
                src="/assets/images/hero/photo-couple-3.png"
                alt="Dina & Difa"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
