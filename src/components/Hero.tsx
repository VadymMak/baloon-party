// src/components/Hero.tsx
import React from "react";
import styles from "./Hero.module.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const bgImage = `${process.env.PUBLIC_URL}/images/my-photo-wall.webp`;

  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1>{t("greeting")}</h1>
        <p className={styles.subtitle}>{t("partyPlace")}</p>
        <div className={styles.cta}>
          <Link to="/contact" className={styles.ctaPrimary}>
            {t("heroCta")}
          </Link>
          <Link to="/gallery" className={styles.ctaSecondary}>
            {t("heroCtaGallery")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;