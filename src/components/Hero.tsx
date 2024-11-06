// src/components/Hero.tsx
import React from "react";
import styles from "./Hero.module.scss"; // Import the SCSS module

const Hero: React.FC = () => (
  <section className={styles.hero}>
    <h1>Vitajte na Balónovej Párty!</h1>
    <p>Vaše miesto pre balónové dekorácie a párty služby.</p>
  </section>
);

export default Hero;
