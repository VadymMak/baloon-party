import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import styles from "./Article.module.scss";
import { useTranslation } from "react-i18next";

interface IArticle {
  titleKey: string;
  descriptionKey: string;
  imageSrc: string;
  imageAlt: string;
  imageLeft: boolean;
  googleMapLink?: string; // Optional for Google map link
}

const Article: React.FC = () => {
  const { t } = useTranslation();
  const [showMap, setShowMap] = useState(false); // State to control map visibility
  const [googleMapLink, setGoogleMapLink] = useState("");

  const [articles] = useState<IArticle[]>([
    {
      titleKey: "christmas_celebration_title",
      descriptionKey: "christmas_celebration_description",
      imageSrc: "/images/article_1.jpg",
      imageAlt: "Christmas Celebration",
      imageLeft: false,
    },
    {
      titleKey: "dia_de_los_muertos_celebration_title",
      descriptionKey: "dia_de_los_muertos_celebration_description",
      imageSrc: "/images/article_2.jpg",
      imageAlt: "Día de los Muertos Celebration",
      imageLeft: true,
      googleMapLink:
        "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d83951.44136072394!2d17.989240284375548!3d48.88714029636577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z0JHQtdC30YDRg9GH0L7QstCwIDY0LCA5MTEgMDEsINCi0YDQtdC90YfQuNC9!5e0!3m2!1sru!2str!4v1731840488748!5m2!1sru!2str",
    },
    {
      titleKey: "halloween_party_celebration_title",
      descriptionKey: "halloween_party_celebration_description",
      imageSrc: "/images/article_3.jpg",
      imageAlt: "Halloween Party",
      imageLeft: false,
    },
  ]);

  const openMap = (link: string) => {
    setGoogleMapLink(link); // Set the link for the map
    setShowMap(true); // Show the popup
  };

  const closeMap = () => {
    setShowMap(false); // Close the map
  };

  return (
    <section className={styles.articles}>
      <h1 className={styles.sectionTitle}>{t("ourArticlesTitle")}</h1>
      {articles.map((article, index) => (
        <div
          key={index}
          className={`${styles.article} ${
            article.imageLeft ? styles.imageLeft : styles.imageRight
          }`}
        >
          <div className={styles.textContainer}>
            <h2>{t(article.titleKey)}</h2>
            <p
              dangerouslySetInnerHTML={{ __html: t(article.descriptionKey) }}
            />
            {article.googleMapLink && (
              <button
                onClick={() =>
                  article.googleMapLink && openMap(article.googleMapLink)
                }
              ></button>
            )}
            <div className={styles.priceListLink}>
              <Link to="/price-list">
                <FontAwesomeIcon icon={faTag} /> {t("view_price_list")}
              </Link>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <img
              src={article.imageSrc}
              alt={article.imageAlt}
              className={styles.image}
            />
          </div>
        </div>
      ))}

      {/* Google Maps Popup */}
      {showMap && googleMapLink && (
        <div className={styles.googleMapOverlay}>
          <iframe
            title="Google Map"
            src={googleMapLink}
            width="80%"
            height="80%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          />

          <button className={styles.closeOverlay} onClick={closeMap}>
            ✖
          </button>
        </div>
      )}
    </section>
  );
};

export default Article;
