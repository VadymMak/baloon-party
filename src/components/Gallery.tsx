import React, { useState } from "react";
import styles from "./Gallery.module.scss";

const images = [
  { id: 1, src: "/images/gallery/slide_1.jpg", label: "Narodeniny" },
  { id: 2, src: "/images/gallery/slide_2.jpg", label: "Dekorácie" },
  { id: 3, src: "/images/gallery/slide_3.jpg", label: "Krst dieťaťa" },
  { id: 4, src: "/images/gallery/slide_4.jpg", label: "Kvetinové" },
  { id: 5, src: "/images/gallery/slide_5.jpg", label: "Prázdniny" },
  { id: 6, src: "/images/gallery/slide_6.jpg", label: "Darček" },
];

const Gallery: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const openImage = (src: string) => {
    setActiveImage(src);
  };

  const closeImage = () => {
    setActiveImage(null);
  };

  return (
    <section className={styles.gallery}>
      <h2>Naša Galéria</h2>
      <div className={styles.buttonContainer}>
        <div className={styles.row}>
          <button
            className={styles.customButton}
            onClick={() => openImage(images[0].src)}
          >
            Narodeniny
          </button>
          <button
            className={styles.customButton}
            onClick={() => openImage(images[1].src)}
          >
            Dekorácie
          </button>
          <button
            className={styles.customButton}
            onClick={() => openImage(images[2].src)}
          >
            Krst dieťaťa
          </button>
        </div>
        <div className={styles.row}>
          <button
            className={styles.customButton}
            onClick={() => openImage(images[3].src)}
          >
            Kvetinové
          </button>
          <button
            className={styles.customButton}
            onClick={() => openImage(images[4].src)}
          >
            Prázdniny
          </button>
          <button
            className={styles.customButton}
            onClick={() => openImage(images[5].src)}
          >
            Darček
          </button>
        </div>
      </div>

      {activeImage && (
        <div className={styles.overlay} onClick={closeImage}>
          <img
            src={activeImage}
            alt="Full Screen"
            className={styles.fullscreenImage}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
