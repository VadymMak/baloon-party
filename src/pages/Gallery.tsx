// Gallery.tsx
import React, { useState } from "react";
import styles from "./Gallery.module.scss";

const placeholderImages = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  url: `/images/gallery/just-sample.jpg`, // Path to your image
  title: `Balloon Setup ${i + 1}`,
}));

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImage = (url: string) => {
    setSelectedImage(url); // Open the full-screen viewer
  };

  const closeImage = () => {
    setSelectedImage(null); // Close the full-screen viewer
  };

  return (
    <div className={styles["gallery-container"]}>
      <h2 className={styles["gallery-title"]}>
        Our Balloon Decorations Gallery
      </h2>
      <div className={styles["gallery-grid"]}>
        {placeholderImages.map((image) => (
          <div className={styles["gallery-item"]} key={image.id}>
            <img
              src={image.url}
              alt={`Decorative balloon setup titled ${image.title}`}
              title={image.title}
              className={styles["gallery-image"]}
              loading="lazy"
              onClick={() => openImage(image.url)} // Click to open full-screen
            />
            <div className={styles["image-overlay"]}>
              <span className={styles["image-title"]}>{image.title}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Full-screen Lightbox */}
      {selectedImage && (
        <div className={styles["lightbox"]} onClick={closeImage}>
          <img
            src={selectedImage}
            alt="Full screen view"
            className={styles["lightbox-image"]}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
