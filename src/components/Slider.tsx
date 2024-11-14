import React, { useState, useEffect } from "react";
import styles from "./Slider.module.scss";

const images = [
  { id: 1, src: "/images/gallery/slide_1.jpg", label: "Narodeniny" },
  { id: 2, src: "/images/gallery/slide_2.jpg", label: "Dekorácie" },
  { id: 3, src: "/images/gallery/slide_3.jpg", label: "Krst dieťaťa" },
  { id: 4, src: "/images/gallery/slide_4.jpg", label: "Kvetinové" },
  { id: 5, src: "/images/gallery/slide_5.jpg", label: "Prázdniny" },
  { id: 6, src: "/images/gallery/slide_6.jpg", label: "Darček" },
];

const Slider: React.FC = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  // Move to the next slide
  const nextSlide = () => {
    setActiveImageIndex(
      (prevIndex) => (prevIndex === images.length - 3 ? 0 : prevIndex + 3) // Slide in groups of 3
    );
  };

  // Move to the previous slide
  const prevSlide = () => {
    setActiveImageIndex(
      (prevIndex) => (prevIndex === 0 ? images.length - 3 : prevIndex - 3) // Slide in groups of 3
    );
  };

  // Automatically change slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // 3000ms = 3 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <section className={styles.slider}>
      <h2>Naše Produkty</h2>
      <div className={styles.sliderContainer}>
        <button className={styles.arrowButton} onClick={prevSlide}>
          &#8249;
        </button>
        <div className={styles.imageContainer}>
          {/* Render three images per slide */}
          <div className={styles.slideRow}>
            {images
              .slice(activeImageIndex, activeImageIndex + 3)
              .map((image) => (
                <div key={image.id} className={styles.imageWrapper}>
                  <img
                    src={image.src}
                    alt={image.label}
                    className={styles.slideImage}
                  />
                  <div className={styles.caption}>{image.label}</div>
                </div>
              ))}
          </div>
        </div>
        <button className={styles.arrowButton} onClick={nextSlide}>
          &#8250;
        </button>
      </div>
    </section>
  );
};

export default Slider;
