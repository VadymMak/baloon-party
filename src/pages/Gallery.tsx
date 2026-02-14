import React, { useState, useCallback, useEffect } from "react";
import styles from "./Gallery.module.scss";
import { useTranslation } from "react-i18next";
import VideoSection from "../components/VideoSection";

const galleryImages = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  url: `/images/gallery/gallery_${i + 1}.jpg`,
}));

const videoUrls = [
  "https://www.instagram.com/reel/DB5u4xeOxgB/?igsh=MTYxc2g4MWhsZ2tzNw==",
  "https://www.instagram.com/reel/DBWaknIqopp/?igsh=ZXBpdXNvNTl1ajNv",
  "https://www.instagram.com/reel/C-0c0oVq1pw/?igsh=MWdodXEwMmdjcG15",
  "https://www.instagram.com/reel/C8ypGJkKax_/?igsh=MXJwMWpnbXZ2Z2NweQ==",
];

const Gallery: React.FC = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setActiveIndex(index);
  const closeLightbox = () => setActiveIndex(null);

  const prevImage = useCallback(() => {
    if (activeIndex === null) return;
    setActiveIndex(activeIndex === 0 ? galleryImages.length - 1 : activeIndex - 1);
  }, [activeIndex]);

  const nextImage = useCallback(() => {
    if (activeIndex === null) return;
    setActiveIndex(activeIndex === galleryImages.length - 1 ? 0 : activeIndex + 1);
  }, [activeIndex]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (activeIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex, prevImage, nextImage]);

  return (
    <div className={styles.gallery}>
      {/* Photo grid */}
      <h2>{t("gallery.title")}</h2>
      <p className={styles.subtitle}>{t("gallery.aboutCompanyText1")}</p>

      <div className={styles.grid}>
        {galleryImages.map((image, index) => (
          <div
            key={image.id}
            className={styles.item}
            onClick={() => openLightbox(index)}
          >
            <img
              src={image.url}
              alt={`${t("gallery.imageAltPrefix")}${image.id}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {activeIndex !== null && (
        <div className={styles.overlay} onClick={closeLightbox}>
          <button
            className={`${styles.navBtn} ${styles.navPrev}`}
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            aria-label="Previous"
          >
            ‹
          </button>
          <img
            src={galleryImages[activeIndex].url}
            alt={`Gallery ${activeIndex + 1}`}
            className={styles.fullImage}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className={`${styles.navBtn} ${styles.navNext}`}
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            aria-label="Next"
          >
            ›
          </button>
          <button className={styles.closeBtn} onClick={closeLightbox}>×</button>
          <div className={styles.counter}>
            {activeIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}

      {/* Instagram videos */}
      <VideoSection urls={videoUrls} />
    </div>
  );
};

export default Gallery;