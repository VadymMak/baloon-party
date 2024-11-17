// src/components/VideoSection.tsx

import React, { useEffect } from "react";
import styles from "./VideoSection.module.scss";

interface VideoSectionProps {
  urls: string[];
}

const VideoSection: React.FC<VideoSectionProps> = ({ urls }) => {
  useEffect(() => {
    // Load Instagram Embed script after the component mounts
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className={styles.videoSection}>
      <h2 className={styles.title}>Watch Our Work</h2>
      <div className={styles.videoContainer}>
        {urls.map((url, index) => (
          <blockquote
            key={index}
            className="instagram-media"
            data-instgrm-permalink={url}
            data-instgrm-version="13"
          >
            <a href={url} target="_blank" rel="noopener noreferrer">
              <span className="sr-only">View Instagram post</span>
            </a>
          </blockquote>
        ))}
      </div>
    </section>
  );
};

export default VideoSection;
