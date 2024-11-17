// src/components/Hero.tsx
import React from "react";
import styles from "./Hero.module.scss";
import { useTranslation } from "react-i18next";

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.hero}>
      <h1>{t("greeting")}</h1>
      <p>{t("partyPlace")}</p>
    </section>
  );
};

export default Hero;
