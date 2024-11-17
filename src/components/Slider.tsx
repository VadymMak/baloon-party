import React, { useState, useEffect } from "react";
import styles from "./Slider.module.scss";

import { useTranslation } from "react-i18next";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState<string>("");
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { t } = useTranslation();

  // Move to the next slide
  const nextSlide = () => {
    setActiveImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Move to the previous slide
  const prevSlide = () => {
    setActiveImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Automatically change slides every 5 seconds
  useEffect(() => {
    if (!isHovered) {
      // Only start the interval if not hovered
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval); // Cleanup on component unmount
    }
  }, [isHovered]); // Dependency array includes `isHovered`

  // Handle click on image for full-screen modal
  const handleImageClick = (src: string) => {
    setModalImageSrc(src);
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section
      className={styles.slider}
      onMouseEnter={() => setIsHovered(true)} // Stop interval on hover
      onMouseLeave={() => setIsHovered(false)} // Restart interval on hover leave
    >
      <h2>{t("ourProducts")}</h2>
      <div className={styles.sliderContainer}>
        <button className={styles.arrowButton} onClick={prevSlide}>
          &#8249;
        </button>
        <div className={styles.imageContainer}>
          {/* Render 3 images at a time */}
          <div className={styles.slideRow}>
            {images
              .map((_, i) => images[(activeImageIndex + i) % images.length])
              .slice(0, 3)
              .map((image) => (
                <div
                  key={image.id}
                  className={styles.imageWrapper}
                  onClick={() => handleImageClick(image.src)}
                >
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

      {/* Full-screen Modal */}
      {isModalOpen && (
        <div className={styles.modal} onClick={closeModal}>
          <img
            src={modalImageSrc}
            alt="Full Screen"
            className={styles.modalImage}
          />
        </div>
      )}
    </section>
  );
};

export default Slider;
