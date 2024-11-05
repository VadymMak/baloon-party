// src/components/Hero.tsx
import React from "react";
import styles from "./Hero.module.scss"; // Import the SCSS module

const Hero: React.FC = () => (
  <section className={styles.hero}>
    <h1>Welcome to Balon Party!</h1>
    <p>Your go-to place for balloon decorations and party services.</p>
  </section>
);

export default Hero;
