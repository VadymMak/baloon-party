import React, { useState, useEffect } from "react";
import Loader from "../components/Loader"; // Import the Loader component
import styles from "./Gallery.module.scss";

const placeholderImages = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  url: `/images/gallery/just-sample.jpg`, // Path to your image
  title: `Balloon Setup ${i + 1}`,
}));

const Gallery: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState(placeholderImages);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  // Simulate a data fetch
  useEffect(() => {
    setTimeout(() => {
      setImages(placeholderImages); // Simulate loaded images
      setLoading(false); // Set loading to false after data is fetched
    }, 2000); // Simulate a 2-second loading time
  }, []);

  const openLightbox = (imageUrl: string) => {
    setCurrentImage(imageUrl);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setCurrentImage(null);
  };

  if (loading) {
    return <Loader />; // Display the loader if data is still loading
  }

  return (
    <div className={styles["gallery-container"]}>
      <h2 className={styles["gallery-title"]}>
        Our Balloon Decorations Gallery
      </h2>
      <div className={styles["gallery-grid"]}>
        {images.map((image) => (
          <div className={styles["gallery-item"]} key={image.id}>
            <img
              src={image.url}
              alt={`Decorative balloon setup titled ${image.title}`}
              title={image.title}
              className={styles["gallery-image"]}
              loading="lazy"
              onClick={() => openLightbox(image.url)} // Open lightbox when image is clicked
            />
            <div className={styles["image-overlay"]}>
              <span className={styles["image-title"]}>{image.title}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <img
            src={currentImage || ""}
            alt="Full-screen view"
            className={styles["lightbox-image"]}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
