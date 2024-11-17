// src/components/VideoSection.tsx

import React, { useEffect } from "react";
import styles from "./VideoSection.module.scss";

const VideoSection: React.FC = () => {
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
        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/reel/DB5u4xeOxgB/?igsh=MTYxc2g4MWhsZ2tzNw=="
          data-instgrm-version="13"
        >
          <a
            href="https://www.instagram.com/reel/DB5u4xeOxgB/?igsh=MTYxc2g4MWhsZ2tzNw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">View Instagram post</span>
          </a>
        </blockquote>
      </div>
    </section>
  );
};

export default VideoSection;
