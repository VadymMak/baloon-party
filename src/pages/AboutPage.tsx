import React from "react";
import { Link } from "react-router-dom";
import styles from "./AboutPage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import Slider from "../components/Slider";
import { useTranslation } from "react-i18next";

const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.topImageContainer}>
        <img
          src="/images/about-us-upd.jpg"
          alt="About Us"
          className={styles.topImage}
        />
      </div>

      <div className={styles.aboutPage}>
        <h1>{t("aboutPage.title")}</h1>
        <p>{t("aboutPage.paragraph1")}</p>
        <p>{t("aboutPage.paragraph2")}</p>
        <p>{t("aboutPage.paragraph3")}</p>

        <div className={styles.priceListLink}>
          <Link to="/price-list">
            <FontAwesomeIcon icon={faTag} /> {t("aboutPage.priceListLink")}
          </Link>
        </div>
      </div>
      <Slider />
    </>
  );
};

export default AboutPage;
