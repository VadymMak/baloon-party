// Gallery.tsx
import React, { useState, useEffect } from "react";
import Loader from "../components/Loader"; // Import the Loader component
import styles from "./Gallery.module.scss";

const placeholderImages = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  url: `/images/gallery/just-sample.jpg`,
  title: `Balloon Setup ${i + 1}`,
}));

const Gallery: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState(placeholderImages);

  // Simulate a data fetch
  useEffect(() => {
    setTimeout(() => {
      setImages(placeholderImages); // Simulate loaded images
      setLoading(false); // Set loading to false after data is fetched
    }, 2000); // Simulate a 2-second loading time
  }, []);

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
            />
            <div className={styles["image-overlay"]}>
              <span className={styles["image-title"]}>{image.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
