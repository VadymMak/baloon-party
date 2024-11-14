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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState<string>("");

  // Move to the next slide
  const nextSlide = () => {
    // Change to the next set of images, wrapping around when necessary
    setActiveImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Move to the previous slide
  const prevSlide = () => {
    // Change to the previous set of images, wrapping around when necessary
    setActiveImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Automatically change slides every 1 second
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // 1000ms = 1 second
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

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
    <section className={styles.slider}>
      <h2>Naše Produkty</h2>
      <div className={styles.sliderContainer}>
        <button className={styles.arrowButton} onClick={prevSlide}>
          &#8249;
        </button>
        <div className={styles.imageContainer}>
          {/* Render 3 images at a time */}
          <div className={styles.slideRow}>
            {/* Looping through images with modulo logic to ensure 3 are always shown */}
            {images
              .map((_, i) => images[(activeImageIndex + i) % images.length]) // Ensure wrap around
              .slice(0, 3) // Always slice 3 images
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
