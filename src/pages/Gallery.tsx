// src/pages/Gallery.tsx

import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import styles from "./Gallery.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import VideoSection from "../components/VideoSection";

const galleryImages = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  url: `/images/gallery/gallery_${i + 1}.jpg`,
  title: "Balloon Party",
}));

const Gallery: React.FC = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [images] = useState(galleryImages);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  // Array of Instagram URLs
  const videoUrls = [
    "https://www.instagram.com/reel/DB5u4xeOxgB/?igsh=MTYxc2g4MWhsZ2tzNw==",
    "https://www.instagram.com/reel/DBWaknIqopp/?igsh=ZXBpdXNvNTl1ajNv",
    "https://www.instagram.com/reel/C-0c0oVq1pw/?igsh=MWdodXEwMmdjcG15",
    "https://www.instagram.com/reel/C8ypGJkKax_/?igsh=MXJwMWpnbXZ2Z2NweQ==",
  ];

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const openLightbox = (imageUrl: string) => {
    setCurrentImage(imageUrl);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setCurrentImage(null);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={styles["gallery-container"]}>
      <h2 className={styles["gallery-title"]}>{t("gallery.title")}</h2>
      <div className={styles["gallery-grid"]}>
        {images.map((image) => (
          <div className={styles["gallery-item"]} key={image.id}>
            <img
              src={image.url}
              alt={`${t("gallery.imageAltPrefix")}${image.title}`}
              title={image.title}
              className={styles["gallery-image"]}
              loading="lazy"
              onClick={() => openLightbox(image.url)}
            />
            <div className={styles["image-overlay"]}>
              <span className={styles["image-title"]}>{image.title}</span>
            </div>
          </div>
        ))}
      </div>

      {isLightboxOpen && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <img
            src={currentImage || ""}
            alt={t("gallery.lightboxAlt")}
            className={styles["lightbox-image"]}
          />
        </div>
      )}
      <div className={styles["company-info"]}>
        <h3>{t("gallery.aboutCompanyTitle")}</h3>
        <p>{t("gallery.aboutCompanyText1")}</p>
        <p>{t("gallery.aboutCompanyText2")}</p>
        <p>{t("gallery.aboutCompanyText3")}</p>
      </div>
      <div className={styles.priceListLink}>
        <Link to="/price-list">
          <FontAwesomeIcon icon={faTag} /> {t("gallery.viewPriceList")}
        </Link>
      </div>
      <div className={styles["video-block"]}>
        <VideoSection urls={videoUrls} />
      </div>
    </div>
  );
};

export default Gallery;
