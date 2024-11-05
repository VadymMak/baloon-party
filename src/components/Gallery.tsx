import React from "react";
import styles from "./Gallery.module.scss"; // Import the SCSS module

const Gallery: React.FC = () => (
  <section className={styles.gallery}>
    <h2>Naša Galéria</h2> {/* Gallery Title in Slovak */}
    <div className={styles.buttonContainer}>
      <div className={styles.row}>
        <button className={styles.customButton}>Button 1</button>
        <button className={styles.customButton}>Button 2</button>
        <button className={styles.customButton}>Button 3</button>
      </div>
      <div className={styles.row}>
        <button className={styles.customButton}>Button 4</button>
        <button className={styles.customButton}>Button 5</button>
        <button className={styles.customButton}>Button 6</button>
      </div>
    </div>
  </section>
);

export default Gallery;
