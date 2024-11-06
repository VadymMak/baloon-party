import React from "react";
import styles from "./Gallery.module.scss"; // Import the SCSS module

const Gallery: React.FC = () => (
  <section className={styles.gallery}>
    <h2>Naša Galéria</h2> {/* Gallery Title in Slovak */}
    <div className={styles.buttonContainer}>
      <div className={styles.row}>
        <button className={styles.customButton}>Narodeniny</button>
        <button className={styles.customButton}>Dekorácie</button>
        <button className={styles.customButton}>Krst dieťaťa</button>
      </div>
      <div className={styles.row}>
        <button className={styles.customButton}>
          <span>Kvetinové</span>
          <br />
          <span>oblúky</span>
        </button>
        <button className={styles.customButton}>Prázdniny</button>
        <button className={styles.customButton}>Darček</button>
      </div>
    </div>
  </section>
);

export default Gallery;
