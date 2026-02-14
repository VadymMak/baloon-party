import React, { useEffect } from "react";
import styles from "./VideoSection.module.scss";
import { useTranslation } from "react-i18next";

interface VideoSectionProps {
  urls: string[];
}

const VideoSection: React.FC<VideoSectionProps> = ({ urls }) => {
  const { t } = useTranslation();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.instgrm?.Embeds) {
        window.instgrm.Embeds.process();
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (window.instgrm?.Embeds) {
      window.instgrm.Embeds.process();
    }
  }, [urls]);

  return (
    <section className={styles.videoSection}>
      <h2>{t("watchOurWork")}</h2>
      <div className={styles.videoGrid}>
        {urls.map((url, index) => (
          <div key={index} className={styles.videoItem}>
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={url}
              data-instgrm-version="14"
              style={{
                maxWidth: "100%",
                width: "100%",
                margin: "0 auto",
                border: "none",
                boxShadow: "none",
              }}
            >
              <a href={url} target="_blank" rel="noopener noreferrer">
                View on Instagram
              </a>
            </blockquote>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoSection;