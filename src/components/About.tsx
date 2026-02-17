import React from "react";
import styles from "./About.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className={styles.about}>
      <div className={styles.textContainer}>
        <h2>{t("aboutUs")}</h2>
        <p className={styles.intro}>{t("aboutUsIntroduction")}</p>
        <p>{t("aboutUsGoal")}</p>
        <div className={styles.priceListLink}>
          <Link to="/price-list">
            <FontAwesomeIcon icon={faTag} /> {t("view_price_list")}
          </Link>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img
          src="/images/my-photo-wall.webp"
          alt="Balónové dekorácie - naša práca"
          className={styles.image}
          loading="lazy"
          width={600}
          height={400}
        />
      </div>
    </section>
  );
};

export default About;