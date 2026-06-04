import "./Gallery.css";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const photos = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  thumb: `/assets/images/gallery/photo-gallery-thumb(${i + 1}).jpeg`,
  full: `/assets/images/gallery/photo-gallery(${i + 1}).jpeg`,
}));

function SlotTitle() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="gallery-slot-wrapper" ref={ref}>
      <motion.span
        className="gallery-title"
        initial={{ y: "100%" }}
        animate={isInView ? { y: "0%" } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Our Gallery
      </motion.span>
    </div>
  );
}

function GalleryItem({ photo, index, onClick }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -40px 0px" });

  return (
    <motion.div
      ref={ref}
      className="gallery-item"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: (index % 2) * 0.1,
        ease: "easeOut",
      }}
      onClick={() => onClick(photo)}
      whileTap={{ scale: 0.97 }}
    >
      <img
        src={photo.thumb}
        alt={`Gallery photo ${photo.id}`}
        className="gallery-thumb"
        loading="lazy"
      />
    </motion.div>
  );
}

function PhotoModal({ photo, onClose }) {
  return (
    <motion.div
      className="gallery-modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <motion.div
        className="gallery-modal-content"
        initial={{ scale: 0.88, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.88, opacity: 0 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={photo.full}
          alt={`Gallery photo ${photo.id}`}
          className="gallery-modal-img"
        />
        <button
          className="gallery-modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>
      </motion.div>
    </motion.div>
  );
}

export default function Gallery() {
  const [activePhoto, setActivePhoto] = useState(null);

  return (
    <div className="gallery-container">
      <SlotTitle />

      <div className="gallery-masonry">
        {photos.map((photo, index) => (
          <GalleryItem
            key={photo.id}
            photo={photo}
            index={index}
            onClick={setActivePhoto}
          />
        ))}
      </div>

      <AnimatePresence>
        {activePhoto && (
          <PhotoModal
            photo={activePhoto}
            onClose={() => setActivePhoto(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
