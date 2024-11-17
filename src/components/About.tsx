import React from "react";
import styles from "./About.module.scss"; // Import SCSS module
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";

import { useTranslation } from "react-i18next";

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.about}>
      <div className={styles.textContainer}>
        <h2>{t("aboutUs")}</h2>
        <p>{t("aboutUsIntroduction")}</p>
        <p>{t("aboutUsGoal")}</p>
        <p>{t("aboutUsSpecialEvents")}</p>
        <p>{t("aboutUsProposition")}</p>
        <p>{t("aboutUsThanks")}</p>
        <div className={styles.priceListLink}>
          <Link to="/price-list">
            <FontAwesomeIcon icon={faTag} /> Zobraziť náš cenník
          </Link>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img
          src="/images/my-photo-wall.jpg"
          alt="Our Decorations"
          className={styles.image}
        />
      </div>
    </section>
  );
};

export default About;
