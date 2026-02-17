import React from "react";
import styles from "./Hero.module.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.hero}>
      <img
        src="/images/my-photo-wall.webp"
        alt="Balónové dekorácie"
        className={styles.bgImage}
        width={1200}
        height={800}
        fetchPriority="high"
      />
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